import glamira from "./images/glamira.png";
import dp_ln from "./images/dp_ln.png";
import tiki_fetcher from "./images/tiki_fetcher.png";

const projects = [
  {
    title: "Loan & Deposit Daily Report",
    tech: ["SQL", "Stored Procedure", "Postgresql"],
    description: "Based on the history of transactions, data on fact deposit and fact loan is cleaned and formatted, then stored procedures are built to process data and create daily reports.",
    image: dp_ln,
    link: "https://github.com/......",
    demo: "https://lookerstudio.google.com/reporting/2daa1de9-abee-4086-bd14-e2e70f38c024",
  },
  {
    title: "E-commerce Data Pipeline",
    tech: ["Python", "GCP", "BigQuery", "dbt", "Looker Studio"],
    description: "Based on the given user behavior data, extract product ids and list of urls, ip addresses, crawling product data, collecting location of ip addresses, processing data format for user behavior data, loading into BigQuery, transforming with dbt, visualizing with Looker Studio",
    image: glamira,
    link: "https://github.com/..........",
    demo: "https://lookerstudio.google.com/reporting/5c99f51b-b618-4daf-a233-fcca44778e84",
  },
  {
    title: "Product API Crawling",
    tech: ["Python", "Requests", "Pandas"],
    description: "Based on given product id dataset, collect data from API with product id, process product description, upload to Postgresql database",
    image: tiki_fetcher,
    link: "https://github.com/........",
  },
];

export default projects;
