/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const esbuild = require('esbuild');
const fs = require('fs');
const nodeResolve = require('@esbuild-plugins/node-resolve').default;

const IS_WATCH_MODE = process.env.IS_WATCH_MODE;

const TARGET_ENTRIES = [
  {
    target: 'es2017',
    entryPoints: ['src/server/server.ts'],
    platform: 'node',
    outfile: './dist/server/server.js',
    plugins: [
      nodeResolve({
        extensions: ['.ts', '.js'],
        onResolved: (resolved) => {
          if (resolved.includes('node_modules')) {
            return {
              external: true,
            };
          }
          return resolved;
        },
      }),
    ],
  },
  {
    target: 'es2020',
    entryPoints: ['src/client/client.ts'],
    outfile: './dist/client/client.js',
  },
];

const buildBundle = async () => {
  try {
    const baseOptions = {
      logLevel: 'info',
      bundle: true,
      charset: 'utf8',
      minifyWhitespace: false,
      absWorkingDir: process.cwd(),
    };

    for (const targetOpts of TARGET_ENTRIES) {
      const mergedOpts = { ...baseOptions, ...targetOpts };

      if (IS_WATCH_MODE) {
        mergedOpts.watch = {
          onRebuild(error) {
            if (error)
              console.error(
                `[ESBuild Watch] (${targetOpts.entryPoints[0]}) Failed to rebuild bundle`
              );
            else
              console.log(
                `[ESBuild Watch] (${targetOpts.entryPoints[0]}) Sucessfully rebuilt bundle`
              );
          },
        };
      }

      const { errors } = await esbuild.build(mergedOpts);

      if (errors.length) {
        console.error(`[ESBuild] Bundle failed with ${errors.length} errors`);
        process.exit(1);
      }
    }
  } catch (e) {
    console.log('[ESBuild] Build failed with error');
    console.error(e);
    process.exit(1);
  }
};

buildBundle().catch(() => process.exit(1));
