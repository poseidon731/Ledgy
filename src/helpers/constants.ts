export const name = "Ledgy";
export const ledgyDomain = "ledgy.com";

export const youtubeUrl =
  "https://www.youtube.com/channel/UCRkvNQptxoE-ckmTsrme1_w";
export const twitterUrl = "https://twitter.com/Ledgy";
export const linkedinUrl = "https://www.linkedin.com/company/Ledgy";
export const facebookUrl = "https://www.facebook.com/Ledgy";
export const angelUrl = "https://angel.co/Ledgy";

export const getLdJson = (url: string): string => `{
  "@context" : "http://schema.org",
  "@type" : "Organization",
  "name" : "Ledgy",
  "url" : "${url}",
  "sameAs" : [
   "${linkedinUrl}",
   "${twitterUrl}",
   "${facebookUrl}",
   "${youtubeUrl}",
   "${angelUrl}"
   ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Förrlibuckstrasse 190",
    "addressRegion": "ZH",
    "postalCode": "8005",
    "addressCountry": "CH"
  }
}`;

// external URLs
export const appUrl = "https://app.ledgy.com";
export const demoUrl = "https://demo.ledgy.com";
export const helpUrl = "https://support.ledgy.com";
export const calculatorUrl = "https://calculator.ledgy.com";
export const githubUrl = "https://github.com/morloy/ledgy.com/";
export const scheduleDemoUrl = "https://resources.ledgy.com/schedule-demo";
export const youtubeEmbedBaseUrl = "https://www.youtube.com/embed";
export const ledgyUrl = "https://ledgy.com";
export const demoPage = "demo/ledgy";

// netlify & mixpanel
const isNetlify =
  typeof window !== "undefined" && window.location.hostname !== "localhost";

export const MIXPANEL_TOKEN = isNetlify
  ? "258b9724a7ad7271dd2e3e3440bb68fd"
  : "7f124dd9a799a7c687dc38ee554d9876";

// plan names
export const LEDGY_PLANS = Object.freeze({
  STARTUP: "Startup",
  SCALEUP: "Premium", // will be named Scaleup soon
  ENTERPRISE: "Enterprise",
});

// company sizes
export const COMPANY_SIZES = ["1–10", "11–50", "51–100", "101–250", "251+"];
export const SMALL_COMPANY_SIZES: string[] = COMPANY_SIZES.slice(0, 2);

// email validation
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
export const isValidEmail = (email: string) => EMAIL_REGEX.test(email);

// misc
export const isBrowser = typeof window !== "undefined";
export const isDevelopment =
  isBrowser && window.location.hostname === "localhost";

export const targetBlank = { target: "_blank", rel: "noopener noreferrer" };

// links
export const HR_AND_COMPENSATION = "hr-and-compensation";
export const FINANCE_ACCOUNTING = "finance-accounting";
export const LEGAL_OPERATIONS = "legal-operations";
export const VCS_BUSINESS_ANGELS = "vcs-business-angels";
export const DATA_PROTECTION = "data-protection";
export const CAP_TABLE = "cap-table";
export const EQUITY_PLAN_AUTOMATION = "equity-plan-automation";
export const SCENARIO_MODELING = "scenario-modeling";
export const EMPLOYEE_ENGAGEMENT = "employee-dashboards";
export const SECONDARIES = "secondaries";
export const MARKETPLACE = "marketplace";
export const ESOP_TEMPLATES = "employee-participation-plan-templates";
export const CALCULATOR = "calculator";

//titles
export const HR_AND_COMPENSATION_TITLE = "HR & Compensation";
export const FINANCE_ACCOUNTING_TITLE = "Finance & Accounting";
export const LEGAL_OPERATIONS_TITLE = "Legal & Operations";
export const VCS_BUSINESS_ANGELS_TITLE = "VCs & Business Angels";
export const CAP_TABLE_MANAGEMENT_TITLE = "Cap Table Management";
export const EQUITY_PLAN_AUTOMATION_TITLE = "Equity Plan Automation";
export const SCENARIO_MODELING_TITLE = "Scenario & Exit Modeling";
export const EMPLOYEE_ENGAGEMENT_TITLE = "Employee Engagement";
export const SECONDARIES_TITLE = "Secondaries";
export const MARKETPLACE_TITLE = "Marketplace";
export const ESOP_TEMPLATES_TITLE = "ESOP Templates";
export const CALCULATOR_TITLE = "Financing Calculator";

//tags
export const ALL_TOPICS = "All topics";
export const BLOG_TAGS = [
  ALL_TOPICS,
  "Companies",
  "Investors",
  "Equity",
  "Funding",
];
export const UPDATE_TAGS = [ALL_TOPICS, "Product", "Company", "Team", "News"];

//segment track actions
export const DEMO_BUTTON = "demoButton";
export const CUSTOM_BUTTON = "customButton";
export const SIGNUP_LOGIN_BUTTON = "SignupLoginButton";
export const DEMO_NAVBAR = "demoNavBar";
export const GET_STARTED_LINK = "getStartedLink";
export const TOP_UPDATE_BANNER = "topUpdateBanner";
