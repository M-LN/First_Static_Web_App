module.exports = async function (context, req) {
    // Get current date for the report
    const date = new Date().toLocaleDateString();
    
    // Generate HTML report
    const htmlReport = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Generated Report</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            h1 { color: #007bff; }
            .report-date { color: #666; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
        </style>
    </head>
    <body>
        <h1>Generated Report</h1>
        <p class="report-date">Date: ${date}</p>
        <div class="report-content">
            <h2>Sample Report Data</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Item</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Item A</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Item B</td>
                    <td>$200</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Item C</td>
                    <td>$300</td>
                </tr>
            </table>
        </div>
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