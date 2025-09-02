// src/data/paymentPolicyData.js

/**
 * Contains the structured data for the company's payment policy.
 * This data is extracted from the official 2024 policy document.
 */
export const paymentpolicydata = {
  title: "Payment Policy",
  category: "Billing",
  updatedOn: "2024",
  content: [
    {
      header: "General Payment Policy",
      points: [
        "<strong>Due Date:</strong> Payments are due by the 14th of each month.",
        "<strong>Early Payment Discount:</strong> Receive a 2% discount on your total statement when payments are made via check on or before the 10th of each month.",
        "<strong>Late Payment Consequences:</strong> A 2% interest fee will be applied monthly for balances overdue by 30 days or more.",
        "<strong>Account Holds:</strong> All cases will be held until full payment is received for accounts with past due balances exceeding 60 days.",
        "<strong>Restriction on Services:</strong> Accounts with balances past due over 90 days will be transitioned to Cash on Delivery (C.O.D) for future deliveries and must prepay for delivery."
      ]
    },
    {
      header: "Accepted Payment Methods",
      points: [
        "<strong>Checks:</strong> Make payable to 'Infinia Dental Lab' and mail to: 20410 Century Blvd., Suite 240, Germantown, MD 20874.",
        "<strong>Driver Pick-up:</strong> You may request our driver for a check pick-up service.",
        "<strong>Credit Cards:</strong> We accept Visa, Mastercard, American Express, and Discover.",
        "<strong>Online Portal:</strong> Use your online portal to make a credit card payment.",
        "<strong>Pay by Telephone:</strong> Call our office and press 2 to connect for payment.",
        "<strong>Autopay:</strong> Contact our office or set it up through the client portal."
      ]
    },
    {
      header: "How to Log in to Your Magic Touch Account",
      points: [
        "Visit <strong>Infiniadental.com</strong> and click on the 'Client Login' tab at the top of the homepage.",
        "Alternatively, use the direct link: <a href='https://infiniaportal.dicpm.net/login.aspx' target='_blank' rel='noopener noreferrer' class='text-blue-600 hover:underline'>https://infiniaportal.dicpm.net/login.aspx</a>.",
        "For assistance with account setup, please call our office."
      ]
    },
    {
      header: "How to Make Credit Card Payments Online",
      points: [
        "Navigate to the 'Make Payment' form in your online portal account.",
        "Select your payment option:",
        `<ul>
            <li class='ml-4 list-disc'>Total balance</li>
            <li class='ml-4 list-disc'>Balance due now</li>
            <li class='ml-4 list-disc'>Past due balances</li>
            <li class='ml-4 list-disc'>A specific amount</li>
            <li class='ml-4 list-disc'>Specific invoices</li>
        </ul>`,
        "Enter any relevant payment notes.",
        "You can optionally save your Credit Card details for future transactions.",
        "To process, choose your payment type (eCheck or Credit Card), provide billing information, select the amount, and complete the process."
      ]
    }
  ]
};
