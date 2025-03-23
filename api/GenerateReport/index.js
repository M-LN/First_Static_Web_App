module.exports = async function (context, req) {
    // Get current date for the report
    const date = new Date().toLocaleDateString();
    
    // Sample data for progression charts
    const monthlyData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                name: 'Revenue',
                values: [5000, 6500, 5900, 8000, 9100]
            },
            {
                name: 'Expenses',
                values: [4000, 4200, 3800, 5500, 6000]
            },
            {
                name: 'Profit',
                values: [1000, 2300, 2100, 2500, 3100]
            }
        ]
    };
    
    // Generate HTML report with embedded chart.js
    const htmlReport = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Performance Analysis Report</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
            h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
            h2 { color: #2980b9; margin-top: 30px; }
            h3 { color: #3498db; }
            .report-date { color: #7f8c8d; font-style: italic; }
            .report-section { margin: 30px 0; }
            .executive-summary { background-color: #f8f9fa; padding: 20px; border-radius: 5px; }
            .chart-container { width: 100%; height: 400px; margin: 20px 0; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background-color: #f2f2f2; }
            tr:nth-child(even) { background-color: #f9f9f9; }
            .kpi { display: inline-block; width: 30%; margin: 10px; padding: 15px; 
                  background-color: #eaf2f8; border-radius: 5px; text-align: center; }
            .kpi-value { font-size: 24px; font-weight: bold; color: #2980b9; }
            .kpi-label { font-size: 14px; color: #7f8c8d; }
            .footer { margin-top: 50px; font-size: 12px; color: #7f8c8d; text-align: center; }
        </style>
    </head>
    <body>
        <h1>Performance Analysis Report</h1>
        <p class="report-date">Generated on: ${date}</p>
        
        <div class="report-section executive-summary">
            <h2>Executive Summary</h2>
            <p>This report provides a comprehensive analysis of the company's performance over the last five months. 
            Key findings indicate a steady growth in revenue with a 82% increase from January to May, 
            alongside a more controlled 50% increase in expenses during the same period.</p>
            
            <div class="kpi">
                <div class="kpi-value">82%</div>
                <div class="kpi-label">Revenue Growth</div>
            </div>
            <div class="kpi">
                <div class="kpi-value">210%</div>
                <div class="kpi-label">Profit Increase</div>
            </div>
            <div class="kpi">
                <div class="kpi-value">34%</div>
                <div class="kpi-label">Margin Improvement</div>
            </div>
        </div>
        
        <div class="report-section">
            <h2>Financial Progression Analysis</h2>
            <p>The following chart illustrates the progression of key financial metrics over the past five months.
            Note the accelerating revenue growth starting in April, coinciding with the launch of our new product line.</p>
            
            <div class="chart-container">
                <canvas id="progressionChart"></canvas>
            </div>
            
            <h3>Analysis Insights</h3>
            <p>The data reveals several important trends:</p>
            <ul>
                <li><strong>Revenue Acceleration:</strong> The steeper slope in the last two months indicates our marketing 
                initiatives are gaining traction.</li>
                <li><strong>Cost Control:</strong> Despite revenue growth, we've maintained a relatively flat expense curve, 
                demonstrating improved operational efficiency.</li>
                <li><strong>Profit Leverage:</strong> The widening gap between revenue and expenses shows our improved ability 
                to convert sales into profit.</li>
            </ul>
        </div>
        
        <div class="report-section">
            <h2>Detailed Monthly Figures</h2>
            <p>The table below provides a detailed breakdown of financial performance metrics by month.</p>
            
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Revenue ($)</th>
                        <th>Expenses ($)</th>
                        <th>Profit ($)</th>
                        <th>Margin (%)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>January</td>
                        <td>5,000</td>
                        <td>4,000</td>
                        <td>1,000</td>
                        <td>20.0%</td>
                    </tr>
                    <tr>
                        <td>February</td>
                        <td>6,500</td>
                        <td>4,200</td>
                        <td>2,300</td>
                        <td>35.4%</td>
                    </tr>
                    <tr>
                        <td>March</td>
                        <td>5,900</td>
                        <td>3,800</td>
                        <td>2,100</td>
                        <td>35.6%</td>
                    </tr>
                    <tr>
                        <td>April</td>
                        <td>8,000</td>
                        <td>5,500</td>
                        <td>2,500</td>
                        <td>31.3%</td>
                    </tr>
                    <tr>
                        <td>May</td>
                        <td>9,100</td>
                        <td>6,000</td>
                        <td>3,100</td>
                        <td>34.1%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="report-section">
            <h2>Recommendations</h2>
            <p>Based on the analysis presented in this report, the following recommendations are proposed:</p>
            <ol>
                <li><strong>Continue Marketing Investment:</strong> The positive response to recent marketing initiatives suggests 
                further investment would yield continued growth.</li>
                <li><strong>Scale Operations Gradually:</strong> While expenses are well-controlled, careful planning is needed 
                to maintain efficiency as we scale.</li>
                <li><strong>Explore New Markets:</strong> With improved margins, we now have the capital to consider expansion 
                into adjacent market segments.</li>
            </ol>
        </div>
        
        <div class="footer">
            <p>This is an automatically generated report. For questions, please contact the analytics team.</p>
        </div>
        
        <script>
            // Create the progression chart
            const ctx = document.getElementById('progressionChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ${JSON.stringify(monthlyData.labels)},
                    datasets: [
                        {
                            label: 'Revenue',
                            data: ${JSON.stringify(monthlyData.datasets[0].values)},
                            borderColor: 'rgb(54, 162, 235)',
                            backgroundColor: 'rgba(54, 162, 235, 0.1)',
                            tension: 0.1,
                            fill: true
                        },
                        {
                            label: 'Expenses',
                            data: ${JSON.stringify(monthlyData.datasets[1].values)},
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.1)',
                            tension: 0.1,
                            fill: true
                        },
                        {
                            label: 'Profit',
                            data: ${JSON.stringify(monthlyData.datasets[2].values)},
                            borderColor: 'rgb(75, 192, 192)',
                            backgroundColor: 'rgba(75, 192, 192, 0.1)',
                            tension: 0.1,
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Amount ($)'
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: '5-Month Financial Progression'
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    }
                }
            });
        </script>
    </body>
    </html>
    `;
    
    context.res = {
        status: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: htmlReport
    };
};