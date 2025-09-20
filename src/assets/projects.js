import glamira from './images/glamira.png'
import dp_ln from './images/dp_ln.png'

const projects = [
  {
    title: "Loan & Capital Daily Report",
    tech: ["SQL", "Stored Procedure"],
    description:
      "Xây dựng stored procedure xử lý dữ liệu nguồn vốn và sử dụng vốn để tạo daily report.",
    image: dp_ln,
    link: "https://github.com/yourname/loan-report-sql"
  },
  {
    title: "E-commerce Data Pipeline",
    tech: ["Python", "GCP", "BigQuery", "dbt", "Looker Studio"],
    description:
      "Crawling dữ liệu sản phẩm, enrich location, load vào BigQuery, transform bằng dbt, visualize bằng Looker Studio.",
    image: glamira,
    link: "https://github.com/yourname/ecommerce-pipeline"
  },
  {
    title: "Product API Crawling",
    tech: ["Python", "Requests", "Pandas"],
    description:
      "Crawling data từ API, xử lý với Pandas, load lên GCS & BigQuery.",
    image: "product_api.png",
    link: "https://github.com/yourname/product-api-crawling"
  }
];

export default projects;
