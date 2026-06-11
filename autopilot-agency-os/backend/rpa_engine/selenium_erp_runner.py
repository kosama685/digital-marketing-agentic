"""
Selenium ERP Runner for AutoPilot Agency OS

Fallback script for legacy ERP portals (Odoo, SAP, custom portals)
when APIs are unavailable. Uses UI selectors to extract inventory/invoice data.

API-first approach: Try direct API first, fall back to Selenium browser automation.
"""

import os
import json
import time
from typing import Optional, Dict, Any, List
from dataclasses import dataclass, asdict
from enum import Enum
import logging

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import (
    TimeoutException, 
    NoSuchElementException, 
    StaleElementReferenceException,
    WebDriverException
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class ERPType(Enum):
    """Supported ERP systems"""
    ODOO = "odoo"
    SAP = "sap"
    ORACLE = "oracle"
    CUSTOM = "custom"
    HUBSPOT = "hubspot"
    SALESFORCE = "salesforce"


@dataclass
class ERPConfig:
    """Configuration for ERP connection"""
    erp_type: ERPType
    base_url: str
    username: str
    password: str
    headless: bool = True
    timeout: int = 30
    extra_config: Optional[Dict[str, Any]] = None


@dataclass
class InventoryItem:
    """Inventory item data structure"""
    sku: str
    name: str
    quantity: int
    price: float
    location: str
    last_updated: str


@dataclass
class InvoiceData:
    """Invoice data structure"""
    invoice_number: str
    customer: str
    amount: float
    status: str
    due_date: str
    items: List[Dict[str, Any]]


@dataclass
class OrderData:
    """Order data structure"""
    order_number: str
    customer: str
    total: float
    status: str
    date: str
    items: List[Dict[str, Any]]


class SeleniumERPRunner:
    """
    Selenium-based ERP automation for data extraction when APIs are unavailable.
    
    Supports:
    - Odoo/OpenERP
    - SAP Business One
    - Oracle NetSuite
    - HubSpot (browser fallback)
    - Custom portals
    
    Usage pattern:
    1. Try direct API first
    2. If API fails or unavailable, use this Selenium runner
    3. Extract data via UI selectors
    4. Return structured JSON data
    """
    
    def __init__(self, config: ERPConfig):
        self.config = config
        self.driver: Optional[webdriver.Chrome] = None
        self.wait: Optional[WebDriverWait] = None
        
    def _setup_driver(self) -> webdriver.Chrome:
        """Configure and initialize Chrome WebDriver"""
        chrome_options = Options()
        
        if self.config.headless:
            chrome_options.add_argument("--headless=new")
        
        # Anti-detection flags
        chrome_options.add_argument("--disable-blink-features=AutomationControlled")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--window-size=1920,1080")
        
        # User agent
        chrome_options.add_argument(
            "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        
        # Disable automation flags
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)
        
        # Initialize driver
        service = Service()
        driver = webdriver.Chrome(service=service, options=chrome_options)
        
        # Execute CDP command to remove automation flags
        driver.execute_cdp_cmd('Page.addScriptToEvaluateOnNewDocument', {
            'source': '''
                Object.defineProperty(navigator, 'webdriver', {
                    get: () => undefined
                })
            '''
        })
        
        return driver
    
    def login(self) -> bool:
        """
        Login to ERP system using credentials.
        Returns True if successful, False otherwise.
        """
        try:
            self.driver = self._setup_driver()
            self.wait = WebDriverWait(self.driver, self.config.timeout)
            
            # Navigate to login page
            self.driver.get(self.config.base_url)
            logger.info(f"Navigated to {self.config.base_url}")
            
            # Handle different ERP types
            if self.config.erp_type == ERPType.ODOO:
                return self._login_odoo()
            elif self.config.erp_type == ERPType.SAP:
                return self._login_sap()
            elif self.config.erp_type == ERPType.HUBSPOT:
                return self._login_hubspot()
            else:
                return self._login_generic()
                
        except Exception as e:
            logger.error(f"Login failed: {str(e)}")
            return False
    
    def _login_odoo(self) -> bool:
        """Login to Odoo/OpenERP"""
        try:
            # Wait for username field
            username_field = self.wait.until(
                EC.presence_of_element_located((By.NAME, "login"))
            )
            username_field.send_keys(self.config.username)
            
            # Password field
            password_field = self.driver.find_element(By.NAME, "password")
            password_field.send_keys(self.config.password)
            
            # Submit button
            submit_button = self.driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
            submit_button.click()
            
            # Wait for dashboard or redirect
            time.sleep(3)
            
            # Check if login was successful (look for user menu or dashboard)
            success_indicators = [
                (By.CSS_SELECTOR, ".o_menu_systray"),
                (By.CSS_SELECTOR, ".o_app_selector"),
                (By.XPATH, "//a[contains(text(), 'Dashboard')]")
            ]
            
            for by_type, selector in success_indicators:
                try:
                    self.driver.find_element(by_type, selector)
                    logger.info("Successfully logged into Odoo")
                    return True
                except NoSuchElementException:
                    continue
            
            logger.warning("Could not confirm Odoo login success")
            return True  # Assume success if no error
            
        except Exception as e:
            logger.error(f"Odoo login error: {str(e)}")
            return False
    
    def _login_sap(self) -> bool:
        """Login to SAP Business One"""
        try:
            # SAP login typically uses a dialog
            username_field = self.wait.until(
                EC.presence_of_element_located((By.ID, "username"))
            )
            username_field.send_keys(self.config.username)
            
            password_field = self.driver.find_element(By.ID, "password")
            password_field.send_keys(self.config.password)
            
            submit_button = self.driver.find_element(By.ID, "loginBtn")
            submit_button.click()
            
            time.sleep(3)
            logger.info("Successfully logged into SAP")
            return True
            
        except Exception as e:
            logger.error(f"SAP login error: {str(e)}")
            return False
    
    def _login_hubspot(self) -> bool:
        """Login to HubSpot"""
        try:
            # HubSpot login
            email_field = self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "input[type='email']"))
            )
            email_field.send_keys(self.config.username)
            
            next_button = self.driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
            next_button.click()
            
            time.sleep(2)
            
            # Password page
            password_field = self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "input[type='password']"))
            )
            password_field.send_keys(self.config.password)
            
            submit_button = self.driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
            submit_button.click()
            
            time.sleep(3)
            logger.info("Successfully logged into HubSpot")
            return True
            
        except Exception as e:
            logger.error(f"HubSpot login error: {str(e)}")
            return False
    
    def _login_generic(self) -> bool:
        """Generic login for custom portals"""
        try:
            # Try common field names for username/email
            username_selectors = [
                (By.NAME, "username"),
                (By.NAME, "email"),
                (By.NAME, "user"),
                (By.ID, "username"),
                (By.ID, "email"),
                (By.CSS_SELECTOR, "input[type='text']")
            ]
            
            username_field = None
            for by_type, selector in username_selectors:
                try:
                    username_field = self.wait.until(
                        EC.presence_of_element_located((by_type, selector))
                    )
                    break
                except TimeoutException:
                    continue
            
            if not username_field:
                raise Exception("Could not find username field")
            
            username_field.send_keys(self.config.username)
            
            # Password field
            password_selectors = [
                (By.NAME, "password"),
                (By.ID, "password"),
                (By.CSS_SELECTOR, "input[type='password']")
            ]
            
            password_field = None
            for by_type, selector in password_selectors:
                try:
                    password_field = self.driver.find_element(by_type, selector)
                    break
                except NoSuchElementException:
                    continue
            
            if not password_field:
                raise Exception("Could not find password field")
            
            password_field.send_keys(self.config.password)
            
            # Submit button
            submit_selectors = [
                (By.CSS_SELECTOR, "button[type='submit']"),
                (By.CSS_SELECTOR, "input[type='submit']"),
                (By.XPATH, "//button[contains(text(), 'Login')]"),
                (By.XPATH, "//button[contains(text(), 'Sign In')]")
            ]
            
            submit_button = None
            for by_type, selector in submit_selectors:
                try:
                    submit_button = self.driver.find_element(by_type, selector)
                    break
                except NoSuchElementException:
                    continue
            
            if submit_button:
                submit_button.click()
                time.sleep(2)
                logger.info("Successfully logged in (generic)")
                return True
            else:
                raise Exception("Could not find submit button")
                
        except Exception as e:
            logger.error(f"Generic login error: {str(e)}")
            return False
    
    def extract_inventory_data(self) -> List[InventoryItem]:
        """Extract inventory data from ERP"""
        if not self.driver:
            raise Exception("Not logged in. Call login() first.")
        
        inventory_items = []
        
        try:
            # Navigate to inventory module
            self._navigate_to_module("inventory")
            
            # Wait for table to load
            table = self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "table.o_list_table"))
            )
            
            # Extract rows
            rows = table.find_elements(By.CSS_SELECTOR, "tbody tr")
            
            for row in rows:
                try:
                    cells = row.find_elements(By.CSS_SELECTOR, "td")
                    if len(cells) >= 4:
                        item = InventoryItem(
                            sku=cells[0].text.strip(),
                            name=cells[1].text.strip(),
                            quantity=int(cells[2].text.strip() or 0),
                            price=float(cells[3].text.strip().replace(',', '') or 0),
                            location=getattr(cells[4], 'text', 'Unknown') if len(cells) > 4 else 'Main Warehouse',
                            last_updated=time.strftime("%Y-%m-%d %H:%M:%S")
                        )
                        inventory_items.append(item)
                except Exception as e:
                    logger.warning(f"Error parsing row: {str(e)}")
                    continue
            
            logger.info(f"Extracted {len(inventory_items)} inventory items")
            
        except Exception as e:
            logger.error(f"Error extracting inventory: {str(e)}")
        
        return inventory_items
    
    def extract_invoice_data(self, date_from: Optional[str] = None, 
                            date_to: Optional[str] = None) -> List[InvoiceData]:
        """Extract invoice data from ERP"""
        if not self.driver:
            raise Exception("Not logged in. Call login() first.")
        
        invoices = []
        
        try:
            # Navigate to invoices module
            self._navigate_to_module("invoices")
            
            # Apply date filters if provided
            if date_from or date_to:
                self._apply_date_filter(date_from, date_to)
            
            # Wait for table
            table = self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "table.o_list_table"))
            )
            
            rows = table.find_elements(By.CSS_SELECTOR, "tbody tr")
            
            for row in rows:
                try:
                    cells = row.find_elements(By.CSS_SELECTOR, "td")
                    if len(cells) >= 5:
                        invoice = InvoiceData(
                            invoice_number=cells[0].text.strip(),
                            customer=cells[1].text.strip(),
                            amount=float(cells[2].text.strip().replace(',', '') or 0),
                            status=cells[3].text.strip(),
                            due_date=cells[4].text.strip(),
                            items=[]
                        )
                        invoices.append(invoice)
                except Exception as e:
                    logger.warning(f"Error parsing invoice row: {str(e)}")
                    continue
            
            logger.info(f"Extracted {len(invoices)} invoices")
            
        except Exception as e:
            logger.error(f"Error extracting invoices: {str(e)}")
        
        return invoices
    
    def extract_order_data(self) -> List[OrderData]:
        """Extract sales order data from ERP"""
        if not self.driver:
            raise Exception("Not logged in. Call login() first.")
        
        orders = []
        
        try:
            self._navigate_to_module("orders")
            
            table = self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "table.o_list_table"))
            )
            
            rows = table.find_elements(By.CSS_SELECTOR, "tbody tr")
            
            for row in rows:
                try:
                    cells = row.find_elements(By.CSS_SELECTOR, "td")
                    if len(cells) >= 5:
                        order = OrderData(
                            order_number=cells[0].text.strip(),
                            customer=cells[1].text.strip(),
                            total=float(cells[2].text.strip().replace(',', '') or 0),
                            status=cells[3].text.strip(),
                            date=cells[4].text.strip(),
                            items=[]
                        )
                        orders.append(order)
                except Exception as e:
                    logger.warning(f"Error parsing order row: {str(e)}")
                    continue
            
            logger.info(f"Extracted {len(orders)} orders")
            
        except Exception as e:
            logger.error(f"Error extracting orders: {str(e)}")
        
        return orders
    
    def _navigate_to_module(self, module_name: str) -> bool:
        """Navigate to a specific ERP module"""
        try:
            # Common navigation patterns
            nav_selectors = [
                f"//a[contains(text(), '{module_name.title()}')]",
                f"//a[contains(text(), '{module_name.upper()}')]",
                f"//span[contains(text(), '{module_name.title()}')]/ancestor::a",
                f"//div[contains(@class, 'app')]//span[contains(text(), '{module_name}')]"
            )
            
            for selector in nav_selectors:
                try:
                    element = self.driver.find_element(By.XPATH, selector)
                    element.click()
                    time.sleep(2)
                    return True
                except NoSuchElementException:
                    continue
            
            logger.warning(f"Could not navigate to {module_name} module")
            return False
            
        except Exception as e:
            logger.error(f"Navigation error: {str(e)}")
            return False
    
    def _apply_date_filter(self, date_from: Optional[str], date_to: Optional[str]) -> None:
        """Apply date range filter"""
        try:
            if date_from:
                date_input = self.driver.find_element(By.NAME, "date_from")
                date_input.clear()
                date_input.send_keys(date_from)
            
            if date_to:
                date_input = self.driver.find_element(By.NAME, "date_to")
                date_input.clear()
                date_input.send_keys(date_to)
            
            # Click apply/filter button
            filter_button = self.driver.find_element(
                By.XPATH, "//button[contains(text(), 'Apply') or contains(text(), 'Filter')]"
            )
            filter_button.click()
            time.sleep(2)
            
        except Exception as e:
            logger.warning(f"Could not apply date filter: {str(e)}")
    
    def create_lead_in_hubspot(self, lead_data: Dict[str, Any]) -> bool:
        """Create a lead/contact in HubSpot via browser automation"""
        if not self.driver:
            raise Exception("Not logged in. Call login() first.")
        
        try:
            # Navigate to contacts
            self.driver.get("https://app.hubspot.com/contacts/")
            time.sleep(3)
            
            # Click "Create contact" button
            create_button = self.wait.until(
                EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Create contact')]"))
            )
            create_button.click()
            
            time.sleep(2)
            
            # Fill in form fields
            if 'firstName' in lead_data:
                self._safe_fill_field("//input[@name='firstname']", lead_data['firstName'])
            
            if 'lastName' in lead_data:
                self._safe_fill_field("//input[@name='lastname']", lead_data['lastName'])
            
            if 'email' in lead_data:
                self._safe_fill_field("//input[@name='email']", lead_data['email'])
            
            if 'phone' in lead_data:
                self._safe_fill_field("//input[@name='phone']", lead_data['phone'])
            
            if 'company' in lead_data:
                self._safe_fill_field("//input[@name='company']", lead_data['company'])
            
            # Save
            save_button = self.driver.find_element(
                By.XPATH, "//button[contains(text(), 'Save') or contains(text(), 'Create')]"
            )
            save_button.click()
            
            time.sleep(2)
            logger.info("Lead created successfully in HubSpot")
            return True
            
        except Exception as e:
            logger.error(f"Error creating lead: {str(e)}")
            return False
    
    def _safe_fill_field(self, xpath: str, value: str) -> None:
        """Safely fill a form field"""
        try:
            field = self.driver.find_element(By.XPATH, xpath)
            field.clear()
            field.send_keys(value)
        except Exception as e:
            logger.warning(f"Could not fill field {xpath}: {str(e)}")
    
    def close(self) -> None:
        """Close the browser session"""
        if self.driver:
            self.driver.quit()
            self.driver = None
            logger.info("Browser session closed")
    
    def __enter__(self):
        """Context manager entry"""
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        """Context manager exit"""
        self.close()


def run_erp_extraction(config: ERPConfig, data_types: List[str] = None) -> Dict[str, Any]:
    """
    Convenience function to extract data from ERP.
    
    Args:
        config: ERP configuration
        data_types: List of data types to extract ['inventory', 'invoices', 'orders']
    
    Returns:
        Dictionary with extracted data
    """
    if data_types is None:
        data_types = ['inventory', 'invoices', 'orders']
    
    result = {
        'success': False,
        'inventory': [],
        'invoices': [],
        'orders': [],
        'errors': []
    }
    
    runner = None
    try:
        runner = SeleniumERPRunner(config)
        
        if not runner.login():
            result['errors'].append("Failed to login to ERP")
            return result
        
        if 'inventory' in data_types:
            result['inventory'] = [asdict(item) for item in runner.extract_inventory_data()]
        
        if 'invoices' in data_types:
            result['invoices'] = [asdict(inv) for inv in runner.extract_invoice_data()]
        
        if 'orders' in data_types:
            result['orders'] = [asdict(order) for order in runner.extract_order_data()]
        
        result['success'] = True
        
    except Exception as e:
        result['errors'].append(str(e))
        logger.error(f"ERP extraction error: {str(e)}")
    
    finally:
        if runner:
            runner.close()
    
    return result


# Example usage
if __name__ == "__main__":
    # Example Odoo configuration
    config = ERPConfig(
        erp_type=ERPType.ODOO,
        base_url="https://your-odoo-instance.com/web/login",
        username=os.getenv("ERP_USERNAME", "admin"),
        password=os.getenv("ERP_PASSWORD", "admin"),
        headless=True
    )
    
    # Extract all data types
    result = run_erp_extraction(config)
    
    print(json.dumps(result, indent=2))
