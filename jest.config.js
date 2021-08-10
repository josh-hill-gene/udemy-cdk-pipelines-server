module.exports = {
    testEnvironment: 'node',
    roots: ['<rootdir>/test'],
    testMatch: ['**/*.test.js'],
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'test-reports',
                outputName: 'test-report.xml'
            }
        ]
    ]
};
