## Componente Form

O componente `Form` é utilizado para criar formulários, oferecendo flexibilidade e estilo personalizável. Ele possui as seguintes propriedades:

### Propriedades

- **children**
  - *Tipo:* `React.ReactNode`
  - *Descrição:* Conteúdo do formulário.

- **as**
  - *Tipo:* `"h1" | "h2" | "h3" | "h4" | "h5" | "h6"`
  - *Descrição:* Define o tipo de elemento HTML a ser renderizado para o título do formulário.

- **fs**
  - *Tipo:* `"xsmall" | "small" | "medium" | "larger" | string`
  - *Descrição:* Define o tamanho da fonte do título.

- **fStyle**
  - *Tipo:* `"normal" | "italic"`
  - *Descrição:* Define o estilo da fonte do título.

- **fw**
  - *Tipo:* `"medium" | "larger"`
  - *Descrição:* Define a espessura da fonte do título.

- **fFamily**
  - *Tipo:* `string`
  - *Descrição:* Define a família da fonte do título.

- **tAlign**
  - *Tipo:* `"start" | "end" | "justify" | "center"`
  - *Descrição:* Define o alinhamento do texto do título.

- **tTransform**
  - *Tipo:* `"none" | "capitalize" | "uppercase" | "lowercase"`
  - *Descrição:* Define a transformação do texto do título.

- **color**
  - *Tipo:* `string`
  - *Descrição:* Define a cor do texto do título.

- **bgColor**
  - *Tipo:* `string`
  - *Descrição:* Define a cor de fundo do formulário.

- **pd, pdTop, pdRight, pdBottom, pdLeft**
  - *Tipo:* `"xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"`
  - *Descrição:* Define o preenchimento (padding) do formulário.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - *Tipo:* `"xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"`
  - *Descrição:* Define a margem do formulário.

- **width**
  - *Tipo:* `string`
  - *Descrição:* Define a largura do formulário.

- **title**
  - *Tipo:* `string`
  - *Descrição:* Título do formulário.

### Classes Predefinidas

- *Tipo:* `string`
- *Descrição:* Define classes adicionais para estilização personalizada.

O componente `Form` possui as seguintes classes predefinidas que podem ser utilizadas para estilização:

- **grid**
  - *Descrição:* Aplica um layout de grade ao formulário.

- **grid-block**
  - *Descrição:* Aplica um layout de grade ao formulário, afetando também seus blocos filhos.

- **block**
  - *Descrição:* Aplica um layout de bloco padrão ao formulário.
