npm init -y
npm i eslint -D
npx eslint --init
npm init @eslint/config

confirgs(Yes,NodeNguide,standard,json,yes)

Ajuste codigo no arquivo  .eslintrc.json
"no-useless-constructor ": "off"

Ferramenta de teste do node utilizado(Vitest)
npm i vitest -D

a fim de rodar teste rodar o 
npx vitest

ou ir no packege.json e dentro de scripts criar o
"test":"vitest" e a partir dessa config 
rodar so npm test