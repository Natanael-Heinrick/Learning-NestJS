# Learning-NestJS

## 📦 Instalando e usando o NestJS

- Instalando NestJS Global do CLI (apenas uma vez):

```json
 npm install -g @nestjs/cli
```

- Depois que o CLI estiver instalado globalmente, você pode criar novos projetos NestJS em qualquer diretório do seu computador com o comando:
  
```json
 nest new project-name
```

- Execução sem Instalação Global (para quem não instalou o CLI globalmente):
  
```json
    npx @nestjs/cli new project-name
```

- No package.json alture o seguinte comando:
```json
    "start:dev": "nest start --watch",
```
- Para: 
```json
    "dev": "nest start --watch",
```

- Assim você consegue rodar o programa usando o seguinte comando no bash: 

```bash
    npm run dev
```

## 📌 Links para os métodos HTTPS e exemplos:
<a name="voltar"></a>
- [get](#get)
- [getId](#getId)
- [put](#put)
- [path](#path)
- [delete](#delete)
## Trabalhando com Rotas

- GET, sem ID, no código:
<a name="get"></a>

```bash
    @Get()
    async show(){
        return this.taskService.show()
    }
```
Por não ter ':id' não é necessário parâmetro nenhum

- GET, com ID, no código:
<a name="getId"></a>

```bash
    @Get(':id')
    async showSpecific(@Param('id', ParseIntPipe) id:number){
        return this.taskService.showSpecific(id)
    }

```

Observe como eu estou usando ':id' ele se torna um parâmetro necessário pra minha rota e a necessidade dele passar para número

- PATH, no código:
<a name="path"></a>

```bash
    @Patch(':id')
    async updatePartial(@Body() {name, type, completed}, @Param('id', ParseIntPipe) id: number){
        return this.taskService.updatePartial(id, {name, type, completed})
    }
```

- PUT, no código:
<a name="put"></a>

```bash
    @Put(':id')
    async updateItems(@Body() {name, type, completed}, @Param('id', ParseIntPipe) id:number){
        return this.taskService.updateItems(id, {name, type, completed})
    }
```

- DELETE, no código:

```bash
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.taskService.delete(id);
    }
```


