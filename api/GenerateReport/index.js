module.exports = async function (context, req) {
    // Get current date for the report
    const date = new Date().toLocaleDateString();
    
    // Sample data for financial metrics
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
    
    // Sample data for ML predictions (future months)
    const predictionData = {
        labels: ['June', 'July', 'August', 'September', 'October'],
        revenue: [9800, 10500, 12000, 13200, 14500],
        confidence: {
            upper: [10200, 11300, 13100, 14500, 16000],
            lower: [9400, 9800, 10900, 11900, 13000]
        }
    };
    
    // Sample customer segmentation data
    const customerSegments = [
        { x: 0.2, y: 0.3, r: 15, segment: "Low Value" },
        { x: 0.5, y: 0.8, r: 25, segment: "High Value" },
        { x: 0.8, y: 0.3, r: 20, segment: "Potential" },
        { x: 0.3, y: 0.6, r: 18, segment: "Loyal" },
        { x: 0.7, y: 0.6, r: 22, segment: "New High Spend" }
    ];
    
    // Sample anomaly detection data
    const anomalyData = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 
                 'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20'],
        values: [420, 430, 425, 429, 522, 435, 430, 425, 440, 438, 450, 442, 432, 435, 620, 460, 445, 450, 455, 465],
        anomalies: [4, 14] // indices of anomalies
    };
    
    // Feature importance for revenue drivers
    const featureImportance = {
        labels: ['Marketing Spend', 'Customer Service', 'Product Quality', 'Price Point', 'Customer Loyalty', 'Market Trends'],
        values: [0.35, 0.18, 0.22, 0.15, 0.08, 0.02]
    };
    
    // Generate HTML report with embedded chart.js
    const htmlReport = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Advanced Analytics Report with ML Insights</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-annotation"></script>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
            h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
            h2 { color: #2980b9; margin-top: 30px; }
            h3 { color: #3498db; }
            .report-date { color: #7f8c8d; font-style: italic; }
            .report-section { margin: 30px 0; }
            .executive-summary { background-color: #f8f9fa; padding: 20px; border-radius: 5px; }
            .chart-container { width: 100%; height: 400px; margin: 20px 0; }
            .chart-container-small { width: 100%; height: 300px; margin: 20px 0; }
            .chart-row { display: flex; gap: 20px; flex-wrap: wrap; }
            .chart-col { flex: 1; min-width: 300px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background-color: #f2f2f2; }
            tr:nth-child(even) { background-color: #f9f9f9; }
            .kpi { display: inline-block; width: 30%; margin: 10px; padding: 15px; 
                  background-color: #eaf2f8; border-radius: 5px; text-align: center; }
            .kpi-value { font-size: 24px; font-weight: bold; color: #2980b9; }
            .kpi-label { font-size: 14px; color: #7f8c8d; }
            .model-metrics { margin: 20px 0; background-color: #f0f7ff; padding: 15px; border-radius: 5px; }
            .model-metric { display: inline-block; width: 22%; margin: 10px; text-align: center; }
            .model-metric-value { font-size: 18px; font-weight: bold; color: #34495e; }
            .model-metric-label { font-size: 12px; color: #7f8c8d; }
            .ml-insight { background-color: #e8f4fd; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #3498db; }
            .footer { margin-top: 50px; font-size: 12px; color: #7f8c8d; text-align: center; }
            .anomaly-point { background-color: #e74c3c; }
        </style>
    </head>
    <body>
        <h1>Advanced Analytics Report with ML Insights</h1>
        <p class="report-date">Generated on: ${date}</p>
        
        <div class="report-section executive-summary">
            <h2>Executive Summary</h2>
            <p>This report provides a comprehensive analysis of business performance complemented by machine learning insights.
            Our predictive models indicate a <strong>59% revenue growth</strong> expected over the next 5 months, with
            customer segmentation analysis revealing opportunities in the "Potential" customer segment.</p>
            
            <div class="kpi">
                <div class="kpi-value">59%</div>
                <div class="kpi-label">Projected Growth</div>
            </div>
            <div class="kpi">
                <div class="kpi-value">2</div>
                <div class="kpi-label">Anomalies Detected</div>
            </div>
            <div class="kpi">
                <div class="kpi-value">93.2%</div>
                <div class="kpi-label">Model Accuracy</div>
            </div>
        </div>
        
        <div class="report-section">
            <h2>Financial Performance & Predictions</h2>
            <p>Our ML models have analyzed historical performance to predict future revenue trends with 93.2% accuracy.
            The shaded area represents the confidence interval of our predictions.</p>
            
            <div class="chart-container">
                <canvas id="predictionChart"></canvas>
            </div>
            
            <div class="model-metrics">
                <div class="model-metric">
                    <div class="model-metric-value">93.2%</div>
                    <div class="model-metric-label">Model Accuracy</div>
                </div>
                <div class="model-metric">
                    <div class="model-metric-value">4.3%</div>
                    <div class="model-metric-label">Mean Absolute Error</div>
                </div>
                <div class="model-metric">
                    <div class="model-metric-value">0.89</div>
                    <div class="model-metric-label">R² Score</div>
                </div>
                <div class="model-metric">
                    <div class="model-metric-value">612</div>
                    <div class="model-metric-label">RMSE</div>
                </div>
            </div>
            
            <div class="ml-insight">
                <h4><i class="fas fa-lightbulb"></i> ML Insight</h4>
                <p>Our time series forecasting model predicts a consistent upward trend with 93.2% confidence.
                The most significant growth is expected between August and September (10% increase),
                suggesting this period may benefit from increased marketing investment.</p>
            </div>
        </div>
        
        <div class="report-section">
            <h2>Customer Segmentation Analysis</h2>
            <p>Our clustering algorithm has identified 5 distinct customer segments based on spending habits and engagement frequency.
            The size of each bubble represents the relative size of each segment.</p>
            
            <div class="chart-container">
                <canvas id="segmentationChart"></canvas>
            </div>
            
            <div class="ml-insight">
                <h4><i class="fas fa-lightbulb"></i> ML Insight</h4>
                <p>The "Potential" segment shows moderate engagement but lower spending. 
                Targeted promotions to this group could yield a 15-20% conversion rate to the "High Value" segment,
                potentially increasing revenue by $45,000 in Q3.</p>
            </div>
        </div>
        
        <div class="report-section">
            <h2>Advanced Analytics</h2>
            
            <div class="chart-row">
                <div class="chart-col">
                    <h3>Anomaly Detection</h3>
                    <p>Our anomaly detection algorithm identified unusual patterns in daily revenue that may require investigation.</p>
                    <div class="chart-container-small">
                        <canvas id="anomalyChart"></canvas>
                    </div>
                </div>
                
                <div class="chart-col">
                    <h3>Revenue Driver Analysis</h3>
                    <p>ML-based feature importance showing the factors most strongly correlated with revenue growth.</p>
                    <div class="chart-container-small">
                        <canvas id="importanceChart"></canvas>
                    </div>
                </div>
            </div>
            
            <div class="ml-insight">
                <h4><i class="fas fa-lightbulb"></i> ML Insight</h4>
                <p>Two significant anomalies were detected on Day 5 and Day 15, showing unusual revenue spikes.
                Our analysis suggests these coincided with promotional events. Marketing spend shows the highest
                correlation with revenue growth (35%), suggesting increased marketing budget allocation could further accelerate growth.</p>
            </div>
        </div>
        
        <div class="report-section">
            <h2>Recommendations from ML Insights</h2>
            <ol>
                <li><strong>Target the "Potential" Customer Segment</strong> - Implement personalized marketing campaigns targeting the 
                "Potential" segment with an estimated 15-20% conversion opportunity.</li>
                <li><strong>Increase Marketing Investment</strong> - Based on feature importance analysis, a 10% increase in marketing 
                spend could yield a 3.5% revenue increase.</li>
                <li><strong>Replicate Promotional Success</strong> - Further analyze the promotional activities from Days 5 and 15 
                to replicate their success in future campaigns.</li>
                <li><strong>Prepare for Q3 Growth</strong> - Our predictive model shows accelerated growth in August-September. 
                Ensure operational capacity for this period.</li>
            </ol>
        </div>
        
        <div class="footer">
            <p>This is an AI-generated analytics report. Model predictions should be used as guidance and validated with business expertise.</p>
        </div>
        
        <script>
            // Create the historical and prediction chart
            const ctxPrediction = document.getElementById('predictionChart').getContext('2d');
            new Chart(ctxPrediction, {
                type: 'line',
                data: {
                    labels: [...${JSON.stringify(monthlyData.labels)}, ...${JSON.stringify(predictionData.labels)}],
                    datasets: [
                        {
                            label: 'Historical Revenue',
                            data: ${JSON.stringify(monthlyData.datasets[0].values)},
                            borderColor: 'rgb(54, 162, 235)',
                            backgroundColor: 'rgba(54, 162, 235, 0.1)',
                            tension: 0.1,
                            fill: true,
                            pointBackgroundColor: 'rgb(54, 162, 235)'
                        },
                        {
                            label: 'Revenue Forecast',
                            data: [...Array(${monthlyData.labels.length}).fill(null), ...${JSON.stringify(predictionData.revenue)}],
                            borderColor: 'rgb(75, 192, 192)',
                            borderDash: [5, 5],
                            backgroundColor: 'rgba(75, 192, 192, 0.1)',
                            tension: 0.1,
                            fill: false,
                            pointBackgroundColor: 'rgb(75, 192, 192)'
                        },
                        {
                            label: 'Upper Confidence Bound',
                            data: [...Array(${monthlyData.labels.length}).fill(null), ...${JSON.stringify(predictionData.confidence.upper)}],
                            borderColor: 'rgba(75, 192, 192, 0.3)',
                            backgroundColor: 'rgba(75, 192, 192, 0)',
                            tension: 0.1,
                            fill: '+1',
                            pointRadius: 0
                        },
                        {
                            label: 'Lower Confidence Bound',
                            data: [...Array(${monthlyData.labels.length}).fill(null), ...${JSON.stringify(predictionData.confidence.lower)}],
                            borderColor: 'rgba(75, 192, 192, 0.3)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            tension: 0.1,
                            fill: false,
                            pointRadius: 0
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
                                text: 'Revenue ($)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Month'
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Revenue Trend and ML-Based Forecast'
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        },
                        annotation: {
                            annotations: {
                                line1: {
                                    type: 'line',
                                    xMin: 4.5,
                                    xMax: 4.5,
                                    borderColor: 'rgba(0, 0, 0, 0.2)',
                                    borderWidth: 2,
                                    borderDash: [6, 6],
                                    label: {
                                        content: 'Forecast Start',
                                        enabled: true,
                                        position: 'top'
                                    }
                                }
                            }
                        }
                    }
                }
            });
            
            // Create the customer segmentation bubble chart
            const ctxSegmentation = document.getElementById('segmentationChart').getContext('2d');
            new Chart(ctxSegmentation, {
                type: 'bubble',
                data: {
                    datasets: [
                        {
                            label: 'Customer Segments',
                            data: ${JSON.stringify(customerSegments.map(item => ({
                                x: item.x,
                                y: item.y,
                                r: item.r
                            })))},
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.7)',
                                'rgba(54, 162, 235, 0.7)',
                                'rgba(255, 206, 86, 0.7)',
                                'rgba(75, 192, 192, 0.7)',
                                'rgba(153, 102, 255, 0.7)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)'
                            ],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Engagement Score'
                            },
                            min: 0,
                            max: 1
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Spending Level'
                            },
                            min: 0,
                            max: 1
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'ML-Based Customer Segmentation'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const segment = ${JSON.stringify(customerSegments)}[context.dataIndex].segment;
                                    return 'Segment: ' + segment;
                                }
                            }
                        },
                        legend: {
                            display: false
                        }
                    }
                }
            });
            
            // Create the anomaly detection chart
            const ctxAnomaly = document.getElementById('anomalyChart').getContext('2d');
            new Chart(ctxAnomaly, {
                type: 'line',
                data: {
                    labels: ${JSON.stringify(anomalyData.labels)},
                    datasets: [
                        {
                            label: 'Daily Revenue',
                            data: ${JSON.stringify(anomalyData.values)},
                            borderColor: 'rgb(75, 192, 192)',
                            backgroundColor: 'rgba(75, 192, 192, 0.1)',
                            tension: 0.1,
                            fill: true,
                            pointRadius: function(context) {
                                const index = context.dataIndex;
                                return ${JSON.stringify(anomalyData.anomalies)}.includes(index) ? 8 : 3;
                            },
                            pointBackgroundColor: function(context) {
                                const index = context.dataIndex;
                                return ${JSON.stringify(anomalyData.anomalies)}.includes(index) ? 'rgb(255, 99, 132)' : 'rgb(75, 192, 192)';
                            }
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'Revenue ($)'
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Anomaly Detection'
                        },
                        tooltip: {
                            callbacks: {
                                afterLabel: function(context) {
                                    const index = context.dataIndex;
                                    if (${JSON.stringify(anomalyData.anomalies)}.includes(index)) {
                                        return 'ANOMALY DETECTED';
                                    }
                                    return '';
                                }
                            }
                        }
                    }
                }
            });
            
            // Create the feature importance chart
            const ctxImportance = document.getElementById('importanceChart').getContext('2d');
            new Chart(ctxImportance, {
                type: 'bar',
                data: {
                    labels: ${JSON.stringify(featureImportance.labels)},
                    datasets: [
                        {
                            label: 'Feature Importance',
                            data: ${JSON.stringify(featureImportance.values)},
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.7)',
                                'rgba(75, 192, 192, 0.7)',
                                'rgba(153, 102, 255, 0.7)',
                                'rgba(255, 159, 64, 0.7)',
                                'rgba(255, 99, 132, 0.7)',
                                'rgba(255, 205, 86, 0.7)'
                            ],
                            borderColor: [
                                'rgb(54, 162, 235)',
                                'rgb(75, 192, 192)',
                                'rgb(153, 102, 255)',
                                'rgb(255, 159, 64)',
                                'rgb(255, 99, 132)',
                                'rgb(255, 205, 86)'
                            ],
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Importance Score'
                            },
                            max: 0.5
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'ML-Based Revenue Driver Analysis'
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    const value = context.raw;
                                    return 'Importance: ' + (value * 100).toFixed(1) + '%';
                                }
                            }
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