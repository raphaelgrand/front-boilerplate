#!/usr/bin/env bash
echo -e "\e[1m\e[32mName of the page ?"
read -p $'\e[0m' name
echo -e "\e[1m\e[32mPath to the file ?"
read -p $'\e[0m' path
new_entry="\
   new HtmlWebpackPlugin({\\
      hash: true,\\
      template: './ejs/$path/$name.ejs',\\
      filename: '$name.html',\\
      variables: { pwet: 'meuh', meuh: 'coin coin' },\\
    }),
"
touch ./ejs/${path}/${name}.ejs
sed -i "/\plugins: \[/a\ $new_entry" ./webpack.config.js
echo -e "\e[1m\e[32mThe page '$name.ejs' has been successfully created"
