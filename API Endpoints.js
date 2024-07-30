// Function to discover potential API endpoints by probing common paths
async function discoverEndpoints() {
    const baseUrl = window.location.origin; // Base URL of the current site
    const testEndpoints = [
        '/api',
        '/api/v1',
        '/api/v1/users',
        '/api/v1/posts',
        '/api/v1/comments',
        '/api/v1/orders',
        '/api/v2',
        '/api/v2/products',
        '/api/v2/customers',
        '/api/v3',
        '/admin',
        '/admin/login',
        '/admin/dashboard',
        '/status',
        '/health',
        '/debug',
        '/info'
    ];

    const results = [];

    for (const endpoint of testEndpoints) {
        const url = baseUrl + endpoint;
        try {
            const response = await fetch(url, { method: 'GET' });
            const text = await response.text();

            if (response.ok) {
                console.log(`Endpoint found: ${url}`);
                results.push({ url, text });
            } else {
                console.log(`Endpoint not found or restricted: ${url}`);
            }
        } catch (error) {
            console.error(`Error accessing ${url}:`, error);
        }
    }

    // Log results for inspection
    console.log('Discovered endpoints:', results);
}

// Execute the function to test endpoints
discoverEndpoints();
