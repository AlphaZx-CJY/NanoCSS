import postcss from 'postcss';
import cssnano from 'cssnano';
import { OutputAsset } from 'rollup';
import { Plugin } from 'vite';

export default function nanoCSSPlugin(): Plugin {
  return {
    name: 'nano-css-plugin',
    enforce: 'post',
    apply: 'build',
    generateBundle: async (_, bundle) => {
      // 删除多余的文件，只保留 CSS 和 HTML
      for (const fileName in bundle) {
        if (!fileName.endsWith('.css') && !fileName.endsWith('.html')) {
          delete bundle[fileName];
        }
      }

      for (const fileName in bundle) {
        if (fileName.endsWith('.css')) {
          const minifyFileName = fileName.replace(/\.css$/, '.min.css');
          const origin = bundle[fileName] as OutputAsset;
          const source = origin.source as string;
          bundle[minifyFileName] = {
            type: 'asset',
            name: origin.name,
            names: origin.names,
            originalFileName: origin.originalFileName,
            originalFileNames: origin.originalFileNames,
            fileName: minifyFileName,
            source: (await postcss([cssnano]).process(source)).content,
            needsCodeReference: false,
          };
        }

        if (fileName.endsWith('.html')) {
          const origin = bundle[fileName] as OutputAsset;
          let source = origin.source as string;
          source = source.replace(/(<link\s+rel="stylesheet"\s+href=")(\.\/[^"]+")/g, '$1/assets/$2');
          origin.source = source;
        }
      }
    },
  };
}
