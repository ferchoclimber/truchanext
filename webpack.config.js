module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // Límite del tamaño del archivo (en bytes) por debajo del cual el archivo se convertirá en una URL de datos
                fallback: 'file-loader', // Utiliza file-loader si el tamaño del archivo excede el límite
              },
            },
          ],
        },
      ],
    },
  };
  