# NLW-SETUP-MOBILE
### REPOSITÓRIO DA EDIÇÃO DO NLW SETUP - MOBILE

## Tecnologias utilizadas
- Typescript
- React Native
- Expo
- TailwindCSS
- DayJS
- Axios
- CLSX
- React-Native-Reanimated

## Como rodar
Requer Node.js 22.13+ (recomendado 24 LTS) e o app **Expo Go** (SDK 58) no celular.

```bash
npm install
npm start            # escaneie o QR code com o Expo Go
```

O app usa a API em `http://<host do Metro>:3333`, ou seja, a mesma máquina que roda o `npm start`
(suba o [back-end](https://github.com/tittobreno/habits-back) nela). Para apontar para outro lugar,
crie um `.env.local` a partir do `.env.example` com `EXPO_PUBLIC_API_URL`.
