module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            colors: {
                'navy-500': '#171a21',
                'green-steam': '#5c7e10',
                'secondaryBlue': 'rgba(62, 126, 167, 0.8)',
                'searchbox': '#316282',
                'search': '#0e1c25'
            },
            backgroundImage: {
                'hero-pattern': "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg')"
            }
        },
    },
    variants: {},
    plugins: [],
}
