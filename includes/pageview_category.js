function pageview_category(page_col) {
    return `
        CASE
            WHEN ${page_col} = '/home' THEN 'Homepage'
            WHEN ${page_col} LIKE '%lander%' THEN 'Lander Page'
            WHEN ${page_col} LIKE '%the%' OR ${page_col} LIKE '%product%' THEN 'Product Page'
            WHEN ${page_col} LIKE '%billing%' THEN 'Billing Page'
            WHEN ${page_col} = '/shipping' THEN 'Shipping Page'
            WHEN ${page_col} = '/cart' THEN 'Cart Page'
            ELSE 'Other'
        
    ` ;
}

module.exports = {pageview_category};