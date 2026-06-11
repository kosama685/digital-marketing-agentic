"""
Multi-AI Provider Router for AutoPilot Agency OS

Routes prompts to the best AI provider based on task type:
- Gemini: Free/cheap bulk data analysis, keyword clustering
- Grok (xAI): Real-time social trend scraping and X/Twitter analysis
- Claude: High-converting copywriting, email sequences, strategy
- OpenAI (GPT-4o): Complex logic, JSON structuring, code generation
- Z.AI / Local LLM: Budget fallback for simple tasks

API-first with automatic fallbacks if a provider is down.
"""

import os
import json
import asyncio
from typing import Optional, Dict, Any, List
from enum import Enum
from dataclasses import dataclass
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class TaskType(Enum):
    """Task types for routing decisions"""
    DATA_ANALYSIS = "data_analysis"
    KEYWORD_CLUSTERING = "keyword_clustering"
    SOCIAL_TRENDS = "social_trends"
    COPYWRITING = "copywriting"
    EMAIL_SEQUENCE = "email_sequence"
    STRATEGY = "strategy"
    COMPLEX_LOGIC = "complex_logic"
    JSON_STRUCTURING = "json_structuring"
    CODE_GENERATION = "code_generation"
    SIMPLE_TASK = "simple_task"


class ProviderStatus(Enum):
    """Provider availability status"""
    AVAILABLE = "available"
    DEGRADED = "degraded"
    UNAVAILABLE = "unavailable"


@dataclass
class ProviderConfig:
    """Configuration for an AI provider"""
    name: str
    api_key_env: str
    base_url: str
    model: str
    cost_per_token: float
    max_tokens: int
    timeout: int
    priority: int  # Lower is higher priority for fallback


@dataclass
class AIResponse:
    """Standardized AI response structure"""
    provider: str
    content: str
    usage: Dict[str, int]
    latency_ms: int
    success: bool
    error: Optional[str] = None


class MultiAIRouter:
    """
    Dynamic AI provider router with automatic fallbacks.
    
    Routes tasks to the most cost-effective and capable provider,
    with automatic failover if a provider is unavailable.
    """
    
    def __init__(self):
        self.providers: Dict[str, ProviderConfig] = {}
        self.provider_status: Dict[str, ProviderStatus] = {}
        self._initialize_providers()
    
    def _initialize_providers(self):
        """Initialize provider configurations from environment variables"""
        
        # Google Gemini - Best for bulk data analysis and keyword clustering
        self.providers["gemini"] = ProviderConfig(
            name="Gemini",
            api_key_env="GEMINI_API_KEY",
            base_url="https://generativelanguage.googleapis.com/v1beta",
            model="gemini-pro",
            cost_per_token=0.00000025,  # $0.25 per million tokens
            max_tokens=8192,
            timeout=30,
            priority=1
        )
        
        # Grok (xAI) - Best for real-time social trends and X/Twitter analysis
        self.providers["grok"] = ProviderConfig(
            name="Grok",
            api_key_env="XAI_API_KEY",
            base_url="https://api.x.ai/v1",
            model="grok-beta",
            cost_per_token=0.000005,  # $5 per million tokens
            max_tokens=4096,
            timeout=20,
            priority=2
        )
        
        # Anthropic Claude - Best for copywriting, emails, and strategy
        self.providers["claude"] = ProviderConfig(
            name="Claude",
            api_key_env="ANTHROPIC_API_KEY",
            base_url="https://api.anthropic.com/v1",
            model="claude-3-sonnet-20240229",
            cost_per_token=0.000003,  # $3 per million tokens
            max_tokens=4096,
            timeout=30,
            priority=3
        )
        
        # OpenAI GPT-4o - Best for complex logic, JSON, and code
        self.providers["openai"] = ProviderConfig(
            name="OpenAI",
            api_key_env="OPENAI_API_KEY",
            base_url="https://api.openai.com/v1",
            model="gpt-4o",
            cost_per_token=0.000005,  # $5 per million tokens
            max_tokens=4096,
            timeout=30,
            priority=4
        )
        
        # Z.AI - Budget fallback for simple tasks
        self.providers["zai"] = ProviderConfig(
            name="Z.AI",
            api_key_env="ZAI_API_KEY",
            base_url="https://api.z.ai/v1",
            model="zai-chat",
            cost_per_token=0.0000001,  # $0.10 per million tokens
            max_tokens=2048,
            timeout=15,
            priority=5
        )
        
        # Initialize all providers as available (will be updated on first use)
        for provider_id in self.providers:
            self.provider_status[provider_id] = ProviderStatus.AVAILABLE
    
    def _get_api_key(self, provider_id: str) -> Optional[str]:
        """Retrieve API key from environment variables"""
        config = self.providers.get(provider_id)
        if not config:
            return None
        return os.getenv(config.api_key_env)
    
    def _select_provider(self, task_type: TaskType) -> Optional[str]:
        """
        Select the best provider for a given task type.
        Returns provider ID or None if no suitable provider is available.
        """
        # Task-to-provider mapping based on capabilities and cost
        task_provider_map = {
            TaskType.DATA_ANALYSIS: ["gemini", "zai", "openai"],
            TaskType.KEYWORD_CLUSTERING: ["gemini", "zai"],
            TaskType.SOCIAL_TRENDS: ["grok", "openai"],
            TaskType.COPYWRITING: ["claude", "openai"],
            TaskType.EMAIL_SEQUENCE: ["claude", "openai"],
            TaskType.STRATEGY: ["claude", "openai"],
            TaskType.COMPLEX_LOGIC: ["openai", "claude"],
            TaskType.JSON_STRUCTURING: ["openai", "claude"],
            TaskType.CODE_GENERATION: ["openai", "claude"],
            TaskType.SIMPLE_TASK: ["zai", "gemini"],
        }
        
        preferred_providers = task_provider_map.get(task_type, ["openai"])
        
        # Find first available provider in preference order
        for provider_id in preferred_providers:
            if self.provider_status.get(provider_id) != ProviderStatus.UNAVAILABLE:
                if self._get_api_key(provider_id):
                    return provider_id
        
        # Fallback: try any available provider
        for provider_id in sorted(self.providers.keys(), 
                                  key=lambda p: self.providers[p].priority):
            if self.provider_status.get(provider_id) != ProviderStatus.UNAVAILABLE:
                if self._get_api_key(provider_id):
                    return provider_id
        
        return None
    
    async def _call_gemini(self, prompt: str, system_prompt: str = "", 
                          max_tokens: int = 2048) -> AIResponse:
        """Call Google Gemini API"""
        import time
        start_time = time.time()
        
        try:
            # Note: In production, use the official Google Generative AI SDK
            # This is a simplified implementation
            api_key = self._get_api_key("gemini")
            if not api_key:
                raise ValueError("Gemini API key not configured")
            
            # Placeholder for actual API call
            # In production: use google-generativeai package
            logger.info(f"Calling Gemini with prompt length: {len(prompt)}")
            
            # Simulated response for demonstration
            response_content = f"[Gemini Response] Analysis of: {prompt[:100]}..."
            
            latency = int((time.time() - start_time) * 1000)
            
            return AIResponse(
                provider="gemini",
                content=response_content,
                usage={"prompt_tokens": len(prompt), "completion_tokens": len(response_content)},
                latency_ms=latency,
                success=True
            )
            
        except Exception as e:
            logger.error(f"Gemini API error: {str(e)}")
            self.provider_status["gemini"] = ProviderStatus.UNAVAILABLE
            return AIResponse(
                provider="gemini",
                content="",
                usage={},
                latency_ms=int((time.time() - start_time) * 1000),
                success=False,
                error=str(e)
            )
    
    async def _call_grok(self, prompt: str, system_prompt: str = "",
                        max_tokens: int = 2048) -> AIResponse:
        """Call xAI Grok API"""
        import time
        start_time = time.time()
        
        try:
            api_key = self._get_api_key("grok")
            if not api_key:
                raise ValueError("Grok API key not configured")
            
            # Placeholder for actual API call
            # In production: use xai package or direct HTTP calls
            logger.info(f"Calling Grok with prompt length: {len(prompt)}")
            
            response_content = f"[Grok Response] Trend analysis: {prompt[:100]}..."
            
            latency = int((time.time() - start_time) * 1000)
            
            return AIResponse(
                provider="grok",
                content=response_content,
                usage={"prompt_tokens": len(prompt), "completion_tokens": len(response_content)},
                latency_ms=latency,
                success=True
            )
            
        except Exception as e:
            logger.error(f"Grok API error: {str(e)}")
            self.provider_status["grok"] = ProviderStatus.UNAVAILABLE
            return AIResponse(
                provider="grok",
                content="",
                usage={},
                latency_ms=int((time.time() - start_time) * 1000),
                success=False,
                error=str(e)
            )
    
    async def _call_claude(self, prompt: str, system_prompt: str = "",
                          max_tokens: int = 2048) -> AIResponse:
        """Call Anthropic Claude API"""
        import time
        start_time = time.time()
        
        try:
            api_key = self._get_api_key("claude")
            if not api_key:
                raise ValueError("Claude API key not configured")
            
            # Placeholder for actual API call
            # In production: use anthropic package
            logger.info(f"Calling Claude with prompt length: {len(prompt)}")
            
            response_content = f"[Claude Response] Copy/Strategy: {prompt[:100]}..."
            
            latency = int((time.time() - start_time) * 1000)
            
            return AIResponse(
                provider="claude",
                content=response_content,
                usage={"prompt_tokens": len(prompt), "completion_tokens": len(response_content)},
                latency_ms=latency,
                success=True
            )
            
        except Exception as e:
            logger.error(f"Claude API error: {str(e)}")
            self.provider_status["claude"] = ProviderStatus.UNAVAILABLE
            return AIResponse(
                provider="claude",
                content="",
                usage={},
                latency_ms=int((time.time() - start_time) * 1000),
                success=False,
                error=str(e)
            )
    
    async def _call_openai(self, prompt: str, system_prompt: str = "",
                          max_tokens: int = 2048) -> AIResponse:
        """Call OpenAI GPT-4o API"""
        import time
        start_time = time.time()
        
        try:
            api_key = self._get_api_key("openai")
            if not api_key:
                raise ValueError("OpenAI API key not configured")
            
            # Placeholder for actual API call
            # In production: use openai package
            logger.info(f"Calling OpenAI with prompt length: {len(prompt)}")
            
            response_content = f"[OpenAI Response] Logic/JSON: {prompt[:100]}..."
            
            latency = int((time.time() - start_time) * 1000)
            
            return AIResponse(
                provider="openai",
                content=response_content,
                usage={"prompt_tokens": len(prompt), "completion_tokens": len(response_content)},
                latency_ms=latency,
                success=True
            )
            
        except Exception as e:
            logger.error(f"OpenAI API error: {str(e)}")
            self.provider_status["openai"] = ProviderStatus.UNAVAILABLE
            return AIResponse(
                provider="openai",
                content="",
                usage={},
                latency_ms=int((time.time() - start_time) * 1000),
                success=False,
                error=str(e)
            )
    
    async def _call_zai(self, prompt: str, system_prompt: str = "",
                       max_tokens: int = 2048) -> AIResponse:
        """Call Z.AI API (budget fallback)"""
        import time
        start_time = time.time()
        
        try:
            api_key = self._get_api_key("zai")
            if not api_key:
                raise ValueError("Z.AI API key not configured")
            
            # Placeholder for actual API call
            logger.info(f"Calling Z.AI with prompt length: {len(prompt)}")
            
            response_content = f"[Z.AI Response] Simple task: {prompt[:100]}..."
            
            latency = int((time.time() - start_time) * 1000)
            
            return AIResponse(
                provider="zai",
                content=response_content,
                usage={"prompt_tokens": len(prompt), "completion_tokens": len(response_content)},
                latency_ms=latency,
                success=True
            )
            
        except Exception as e:
            logger.error(f"Z.AI API error: {str(e)}")
            self.provider_status["zai"] = ProviderStatus.UNAVAILABLE
            return AIResponse(
                provider="zai",
                content="",
                usage={},
                latency_ms=int((time.time() - start_time) * 1000),
                success=False,
                error=str(e)
            )
    
    async def execute(self, task_type: TaskType, prompt: str, 
                     system_prompt: str = "", max_tokens: int = 2048,
                     allow_fallback: bool = True) -> Optional[AIResponse]:
        """
        Execute a prompt using the optimal AI provider with automatic fallbacks.
        
        Args:
            task_type: Type of task to determine best provider
            prompt: The main prompt text
            system_prompt: Optional system instruction
            max_tokens: Maximum tokens for response
            allow_fallback: Whether to try alternative providers on failure
            
        Returns:
            AIResponse object with result or None if all providers failed
        """
        
        # Select best provider for task
        primary_provider = self._select_provider(task_type)
        
        if not primary_provider:
            logger.error("No available AI providers configured")
            return None
        
        providers_to_try = [primary_provider]
        
        if allow_fallback:
            # Add fallback providers in priority order
            for provider_id in sorted(self.providers.keys(),
                                      key=lambda p: self.providers[p].priority):
                if provider_id != primary_provider:
                    if self._get_api_key(provider_id):
                        providers_to_try.append(provider_id)
        
        # Try each provider until one succeeds
        for provider_id in providers_to_try:
            logger.info(f"Attempting to use provider: {provider_id}")
            
            try:
                if provider_id == "gemini":
                    response = await self._call_gemini(prompt, system_prompt, max_tokens)
                elif provider_id == "grok":
                    response = await self._call_grok(prompt, system_prompt, max_tokens)
                elif provider_id == "claude":
                    response = await self._call_claude(prompt, system_prompt, max_tokens)
                elif provider_id == "openai":
                    response = await self._call_openai(prompt, system_prompt, max_tokens)
                elif provider_id == "zai":
                    response = await self._call_zai(prompt, system_prompt, max_tokens)
                else:
                    logger.warning(f"Unknown provider: {provider_id}")
                    continue
                
                if response.success:
                    # Mark provider as available on success
                    self.provider_status[provider_id] = ProviderStatus.AVAILABLE
                    logger.info(f"Successfully used {provider_id} (latency: {response.latency_ms}ms)")
                    return response
                else:
                    logger.warning(f"Provider {provider_id} failed: {response.error}")
                    
            except Exception as e:
                logger.error(f"Error calling {provider_id}: {str(e)}")
                continue
        
        logger.error("All AI providers failed")
        return None
    
    async def analyze_data(self, data: Dict[str, Any]) -> AIResponse:
        """Convenience method for data analysis tasks"""
        prompt = f"Analyze the following data and provide insights:\n{json.dumps(data)}"
        return await self.execute(TaskType.DATA_ANALYSIS, prompt)
    
    async def cluster_keywords(self, keywords: List[str]) -> AIResponse:
        """Convenience method for keyword clustering"""
        prompt = f"Cluster these keywords by intent and topic:\n{json.dumps(keywords)}"
        return await self.execute(TaskType.KEYWORD_CLUSTERING, prompt)
    
    async def analyze_trends(self, social_data: Dict[str, Any]) -> AIResponse:
        """Convenience method for social trend analysis"""
        prompt = f"Analyze these social media trends:\n{json.dumps(social_data)}"
        return await self.execute(TaskType.SOCIAL_TRENDS, prompt)
    
    async def generate_copy(self, brief: str, tone: str = "professional") -> AIResponse:
        """Convenience method for copywriting"""
        system_prompt = f"You are a professional copywriter. Write in a {tone} tone."
        prompt = f"Create high-converting copy based on this brief:\n{brief}"
        return await self.execute(TaskType.COPYWRITING, prompt, system_prompt)
    
    async def generate_email_sequence(self, campaign_brief: str) -> AIResponse:
        """Convenience method for email sequence generation"""
        prompt = f"Generate a 5-email sequence for this campaign:\n{campaign_brief}"
        return await self.execute(TaskType.EMAIL_SEQUENCE, prompt)
    
    async def create_strategy(self, company_info: Dict[str, Any]) -> AIResponse:
        """Convenience method for strategy generation"""
        prompt = f"Create a comprehensive marketing strategy for:\n{json.dumps(company_info)}"
        return await self.execute(TaskType.STRATEGY, prompt)
    
    async def structure_json(self, data_description: str, example: Dict[str, Any]) -> AIResponse:
        """Convenience method for JSON structuring"""
        system_prompt = "You are a JSON expert. Always output valid, well-structured JSON."
        prompt = f"Structure the following data as JSON:\n{data_description}\nExample format:\n{json.dumps(example)}"
        return await self.execute(TaskType.JSON_STRUCTURING, prompt, system_prompt)
    
    async def generate_code(self, requirements: str, language: str = "python") -> AIResponse:
        """Convenience method for code generation"""
        system_prompt = f"You are an expert {language} developer. Write clean, production-ready code."
        prompt = f"Generate {language} code for:\n{requirements}"
        return await self.execute(TaskType.CODE_GENERATION, prompt, system_prompt)
    
    def get_provider_status(self) -> Dict[str, str]:
        """Get current status of all providers"""
        return {
            provider_id: status.value 
            for provider_id, status in self.provider_status.items()
        }
    
    def estimate_cost(self, task_type: TaskType, token_count: int) -> float:
        """Estimate cost for a task based on provider selection"""
        provider_id = self._select_provider(task_type)
        if not provider_id:
            return 0.0
        
        config = self.providers[provider_id]
        return config.cost_per_token * token_count


# Example usage and testing
async def main():
    """Test the Multi-AI Router"""
    router = MultiAIRouter()
    
    print("Provider Status:", router.get_provider_status())
    
    # Test data analysis with Gemini
    response = await router.analyze_data({
        "competitors": ["Company A", "Company B"],
        "keywords": ["dental implants", "teeth whitening"]
    })
    
    if response:
        print(f"\nAnalysis Result ({response.provider}):")
        print(response.content)
        print(f"Latency: {response.latency_ms}ms")
    
    # Test copywriting with Claude
    response = await router.generate_copy(
        "Promote dental implant services in Dubai",
        tone="friendly and professional"
    )
    
    if response:
        print(f"\nCopy Result ({response.provider}):")
        print(response.content)


if __name__ == "__main__":
    asyncio.run(main())
