/**
 * UI.Vision JSON Macro Generator for AutoPilot Agency OS
 * 
 * Dynamically generates UI.Vision RPA macro files for browser automation.
 * Used when direct APIs are unavailable or too expensive.
 * 
 * JSON Schema: { "Name": "Macro_Name", "Commands": [ { "Command": "click", "Target": "xpath=...", "Value": "" } ] }
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Type definitions for UI.Vision macro structure
interface UIvisionCommand {
  Command: string;
  Target: string;
  Value?: string;
}

interface UIvisionMacro {
  Name: string;
  Commands: UIvisionCommand[];
  CreationDate?: string;
  Version?: string;
}

interface MacroConfig {
  name: string;
  baseUrl: string;
  actions: MacroAction[];
}

interface MacroAction {
  type: ActionType;
  target?: string;
  value?: string;
  selector?: SelectorType;
  timeout?: number;
}

type ActionType = 
  | 'open'
  | 'click'
  | 'type'
  | 'select'
  | 'waitForElement'
  | 'assert'
  | 'store'
  | 'if'
  | 'else'
  | 'endIf'
  | 'repeat'
  | 'endRepeat'
  | 'navigate'
  | 'refresh'
  | 'close';

type SelectorType = 'xpath' | 'css' | 'id' | 'name' | 'linkText' | 'partialLinkText';

/**
 * UI.Vision Macro Generator Class
 * 
 * Generates browser automation macros as JSON files compatible with UI.Vision RPA.
 * Falls back to browser automation when APIs are unavailable.
 */
export class UIVisionMacroGenerator {
  private outputDir: string;
  
  constructor(outputDir: string = './macros') {
    this.outputDir = outputDir;
    this.ensureOutputDir();
  }
  
  /**
   * Ensure output directory exists
   */
  private ensureOutputDir(): void {
    if (!existsSync(this.outputDir)) {
      mkdirSync(this.outputDir, { recursive: true });
    }
  }
  
  /**
   * Generate a complete UI.Vision macro from configuration
   */
  generateMacro(config: MacroConfig): UIvisionMacro {
    const commands: UIvisionCommand[] = [];
    
    // Add open command if baseUrl is provided
    if (config.baseUrl) {
      commands.push({
        Command: 'open',
        Target: config.baseUrl,
        Value: ''
      });
    }
    
    // Convert actions to UI.Vision commands
    for (const action of config.actions) {
      const uiVisionCommands = this.convertActionToCommands(action);
      commands.push(...uiVisionCommands);
    }
    
    const macro: UIvisionMacro = {
      Name: config.name,
      Commands: commands,
      CreationDate: new Date().toISOString(),
      Version: '1.0'
    };
    
    return macro;
  }
  
  /**
   * Convert high-level action to UI.Vision commands
   */
  private convertActionToCommands(action: MacroAction): UIvisionCommand[] {
    const commands: UIvisionCommand[] = [];
    
    switch (action.type) {
      case 'open':
      case 'navigate':
        commands.push({
          Command: 'open',
          Target: action.value || '',
          Value: ''
        });
        break;
        
      case 'click':
        if (action.timeout) {
          commands.push({
            Command: 'waitForElementPresent',
            Target: this.buildSelector(action.selector || 'xpath', action.target || ''),
            Value: action.timeout.toString()
          });
        }
        commands.push({
          Command: 'click',
          Target: this.buildSelector(action.selector || 'xpath', action.target || ''),
          Value: ''
        });
        break;
        
      case 'type':
        if (action.timeout) {
          commands.push({
            Command: 'waitForElementPresent',
            Target: this.buildSelector(action.selector || 'xpath', action.target || ''),
            Value: action.timeout.toString()
          });
        }
        commands.push({
          Command: 'type',
          Target: this.buildSelector(action.selector || 'xpath', action.target || ''),
          Value: action.value || ''
        });
        break;
        
      case 'select':
        commands.push({
          Command: 'select',
          Target: this.buildSelector(action.selector || 'xpath', action.target || ''),
          Value: action.value || ''
        });
        break;
        
      case 'waitForElement':
        commands.push({
          Command: 'waitForElementPresent',
          Target: this.buildSelector(action.selector || 'xpath', action.target || ''),
          Value: (action.timeout || 30).toString()
        });
        break;
        
      case 'assert':
        commands.push({
          Command: 'assertText',
          Target: this.buildSelector(action.selector || 'xpath', action.target || ''),
          Value: action.value || ''
        });
        break;
        
      case 'store':
        commands.push({
          Command: 'store',
          Target: action.value || '',
          Value: action.target || '' // variable name
        });
        break;
        
      case 'refresh':
        commands.push({
          Command: 'refresh',
          Target: '',
          Value: ''
        });
        break;
        
      case 'close':
        commands.push({
          Command: 'close',
          Target: '',
          Value: ''
        });
        break;
        
      default:
        console.warn(`Unknown action type: ${action.type}`);
    }
    
    return commands;
  }
  
  /**
   * Build selector string based on type
   */
  private buildSelector(type: SelectorType, value: string): string {
    switch (type) {
      case 'xpath':
        return `xpath=${value}`;
      case 'css':
        return `css=${value}`;
      case 'id':
        return `id=${value}`;
      case 'name':
        return `name=${value}`;
      case 'linkText':
        return `linkText=${value}`;
      case 'partialLinkText':
        return `partialLinkText=${value}`;
      default:
        return value;
    }
  }
  
  /**
   * Save macro to file
   */
  saveMacro(macro: UIvisionMacro, filename?: string): string {
    const safeName = filename || `${macro.Name.replace(/\s+/g, '_')}.json`;
    const filePath = join(this.outputDir, safeName);
    
    writeFileSync(filePath, JSON.stringify(macro, null, 2), 'utf-8');
    console.log(`Macro saved to: ${filePath}`);
    
    return filePath;
  }
  
  /**
   * Generate macro for login flow
   */
  generateLoginMacro(
    baseUrl: string,
    usernameField: string,
    passwordField: string,
    submitButton: string,
    username: string,
    password: string,
    selectorType: SelectorType = 'xpath'
  ): UIvisionMacro {
    const config: MacroConfig = {
      name: 'Login_Macro',
      baseUrl,
      actions: [
        {
          type: 'waitForElement',
          target: usernameField,
          selector: selectorType,
          timeout: 10
        },
        {
          type: 'type',
          target: usernameField,
          value: username,
          selector: selectorType
        },
        {
          type: 'type',
          target: passwordField,
          value: password,
          selector: selectorType
        },
        {
          type: 'click',
          target: submitButton,
          selector: selectorType
        }
      ]
    };
    
    return this.generateMacro(config);
  }
  
  /**
   * Generate macro for data extraction from table
   */
  generateTableExtractionMacro(
    baseUrl: string,
    tableSelector: string,
    rowSelector: string,
    cellSelectors: string[],
    selectorType: SelectorType = 'xpath'
  ): UIvisionMacro {
    const actions: MacroAction[] = [
      {
        type: 'waitForElement',
        target: tableSelector,
        selector: selectorType,
        timeout: 15
      },
      {
        type: 'store',
        target: 'rowIndex',
        value: '1'
      },
      {
        type: 'repeat',
        target: '10' // Max rows to extract
      }
    ];
    
    // Add extraction commands for each cell
    cellSelectors.forEach((cellSelector, index) => {
      actions.push({
        type: 'store',
        target: cellSelector,
        value: `cell_${index}`
      });
    });
    
    actions.push({ type: 'endRepeat' });
    
    const config: MacroConfig = {
      name: 'Table_Extraction_Macro',
      baseUrl,
      actions
    };
    
    return this.generateMacro(config);
  }
  
  /**
   * Generate macro for form submission
   */
  generateFormSubmissionMacro(
    baseUrl: string,
    formFields: Array<{ selector: string; value: string; type?: SelectorType }>,
    submitButton: string,
    submitButtonType: SelectorType = 'xpath'
  ): UIvisionMacro {
    const actions: MacroAction[] = formFields.map(field => ({
      type: 'type' as const,
      target: field.selector,
      value: field.value,
      selector: field.type || 'xpath',
      timeout: 5
    }));
    
    actions.push({
      type: 'click',
      target: submitButton,
      selector: submitButtonType
    });
    
    const config: MacroConfig = {
      name: 'Form_Submission_Macro',
      baseUrl,
      actions
    };
    
    return this.generateMacro(config);
  }
  
  /**
   * Generate macro for HubSpot lead creation (browser fallback)
   */
  generateHubSpotLeadMacro(
    hubspotUrl: string,
    leadData: {
      firstName: string;
      lastName: string;
      email: string;
      phone?: string;
      company?: string;
    }
  ): UIvisionMacro {
    const config: MacroConfig = {
      name: 'HubSpot_Lead_Creation',
      baseUrl: hubspotUrl,
      actions: [
        {
          type: 'waitForElement',
          target: "//button[contains(text(), 'Create')]",
          selector: 'xpath',
          timeout: 10
        },
        {
          type: 'click',
          target: "//button[contains(text(), 'Create')]",
          selector: 'xpath'
        },
        {
          type: 'type',
          target: "//input[@name='firstname']",
          value: leadData.firstName,
          selector: 'xpath'
        },
        {
          type: 'type',
          target: "//input[@name='lastname']",
          value: leadData.lastName,
          selector: 'xpath'
        },
        {
          type: 'type',
          target: "//input[@name='email']",
          value: leadData.email,
          selector: 'xpath'
        },
        ...(leadData.phone ? [{
          type: 'type' as const,
          target: "//input[@name='phone']",
          value: leadData.phone,
          selector: 'xpath' as const
        }] : []),
        ...(leadData.company ? [{
          type: 'type' as const,
          target: "//input[@name='company']",
          value: leadData.company,
          selector: 'xpath' as const
        }] : []),
        {
          type: 'click',
          target: "//button[contains(text(), 'Save')]",
          selector: 'xpath'
        }
      ]
    };
    
    return this.generateMacro(config);
  }
  
  /**
   * Generate macro for ERP data extraction (Odoo/SAP fallback)
   */
  generateERPDataExtractionMacro(
    erpUrl: string,
    dataType: 'inventory' | 'invoices' | 'orders'
  ): UIvisionMacro {
    let navigationPath = '';
    let tableSelector = '';
    
    switch (dataType) {
      case 'inventory':
        navigationPath = "//a[contains(text(), 'Inventory')]";
        tableSelector = "//table[contains(@class, 'o_list_table')]";
        break;
      case 'invoices':
        navigationPath = "//a[contains(text(), 'Invoices')]";
        tableSelector = "//table[contains(@class, 'o_list_table')]";
        break;
      case 'orders':
        navigationPath = "//a[contains(text(), 'Orders')]";
        tableSelector = "//table[contains(@class, 'o_list_table')]";
        break;
    }
    
    const config: MacroConfig = {
      name: `ERP_${dataType.toUpperCase()}_Extraction`,
      baseUrl: erpUrl,
      actions: [
        {
          type: 'waitForElement',
          target: navigationPath,
          selector: 'xpath',
          timeout: 15
        },
        {
          type: 'click',
          target: navigationPath,
          selector: 'xpath'
        },
        {
          type: 'waitForElement',
          target: tableSelector,
          selector: 'xpath',
          timeout: 10
        },
        {
          type: 'store',
          target: tableSelector,
          value: 'erp_data'
        }
      ]
    };
    
    return this.generateMacro(config);
  }
}

/**
 * Factory function to create common macros
 */
export function createMacroGenerator(outputDir?: string): UIVisionMacroGenerator {
  return new UIVisionMacroGenerator(outputDir);
}

// Example usage and export
if (typeof require !== 'undefined' && require.main === module) {
  const generator = createMacroGenerator('./generated_macros');
  
  // Generate a login macro example
  const loginMacro = generator.generateLoginMacro(
    'https://example.com/login',
    "//input[@id='username']",
    "//input[@id='password']",
    "//button[@type='submit']",
    'test_user',
    'test_password'
  );
  
  generator.saveMacro(loginMacro, 'example_login.json');
  
  // Generate HubSpot lead creation macro
  const hubspotMacro = generator.generateHubSpotLeadMacro(
    'https://app.hubspot.com/contacts',
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      company: 'Acme Corp'
    }
  );
  
  generator.saveMacro(hubspotMacro, 'hubspot_lead_creation.json');
  
  console.log('Macros generated successfully!');
}

export default UIVisionMacroGenerator;
