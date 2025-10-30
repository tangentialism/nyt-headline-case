import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Test environment
    environment: 'node',
    
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      
      // Files to include in coverage
      include: ['src/**/*.ts'],
      
      // Files to exclude from coverage
      exclude: [
        'src/**/*.test.ts',
        'src/**/*.spec.ts',
        'node_modules/**',
        'dist/**',
        '**/*.d.ts',
      ],
      
      // Coverage thresholds - enforced at 90%
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
    
    // Test globals (optional, but convenient)
    globals: true,
    
    // Test file patterns
    include: ['tests/**/*.test.ts', 'tests/**/*.spec.ts'],
  },
});

