# Redux Kurulum Adımları

1. kütüphane Kurulumu
 `npm i redux react-redux  `

 redux un react a özel olarak geliştirdiği kütüphaneyi de indiriyoruz. İkisini de indirmeliyiz

 2. Store Kurulumu :
 - Redux işlemleri için redux isminde bir klasör oluştur.
 - içerisine store.js dosyası oluştur.
 - redux kütüphanesinden **createStore** metodu import edilir
 - store içerisinde tutulan veriler kategorize edilir ve her bir kategori için bir reducer oluşturulur.
 - oluşturulan reducerlar **combineReducer** metodu ile birleştirilir.
 - store birleştirilmiş reducerlar tanıtılır.
 - oluşturulan store projeye tanıtılır. 


 ``` javascript
//örnek bir store
import {createStore,combineReducers} from 'redux';
import todoReducer from './reducers/todoReducer';
import categoryReducer from './reducers/categoryReducer';

// bir tane reducer var ise
export default createStore(todoReducer);

//birden çok reducer var ise bu şekilde birleştirilir
const rootReducer = combineReducers({
    todoReducer,
    categoryReducer
})

export default createStore(rootReducer);
 ```

 3. Reducers kurulumu
 - redux klasörünün içerisine reducer ları tutan ayrı bir klasör aç
 - reducer kalsörünün içerisinde bir tane ...reducer.js dosyası oluştur.
 - her bir farklı veri grubu için ayrı ayrı reducerlar oluşturulabilir. 
 - * Reducer: store da tutulan verilerin nasıl değişeceğine karar veren fonksiyondur.
 - iki parametre alır 
    1. State: store da tutulan verinin son durumudur.
    2. action : store nin nasıl etkilenmesi gerektiğinin belirten bir objedir.
- reducerdan dönen veri store nin güncel halidir.
- initialState : store de tutulacak değerlerin başlangıç değerlerini tutar

``` javascript
//örnek bir reducer
const initialState = {
    todos : [],
    isEmpty:true
}
const todoReducer = (state=initialState,action) => {
    switch(action.type) {
        case "ADD_TODO":
            //kodlar
            return '';
        case "DELETE_TODO": 
            //kodlar
            return '';
        default :
            //kodlar
            return state;
    }
}
export default todoReducer;
```
4. Provider 
- store de tutulan verileri uygulamaya tanıtılmasını sağlar.
- main.jsx dosyasına Providor ve store yi import edin.
- consol da bir hata var ise kurulum adımlarından birini atlamış olabilirsiniz.

``` javascript
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
       <App />
    </Provider>
  
)
```
5. Store Veri Gönderme

- store ekleme yapmak istediğiniz bileşende **useDispatch** i import edin.
- dispatch ile reducer a yaplıması gereken emir ve ekler gönderilir.
- store doğrudan değiştirelemez. reducer lar ile dolaylı olarak manipüle edilir.

``` javascript
import { useDispatch } from 'react-redux'

 const dispatch= useDispatch()

const dispatch= useDispatch()

 dispatch({
            type:"ADD_TODO",
            payload:newTodo
        }); 


```

6. Store dan Veri Çekme

- useSelector metodu ile store ile bağlantı kurulur

```javascript
import { useSelector } from 'react-redux'
 const state = useSelector((store)=>store.todoReducer)

 state.todos.map((todo,index) => <TodoCard key={index} todo= {todo}/>)
```

7. action Types :  dispatch ile gönderdiğimiz emirleri veya reducer daki case leri strin ifadeler şekilinde manuel yazığımızda bir harf hatasından dolayı kodlar çalışmayabilir. bunun önüne geçebilmek için action type lar ayrı bir dosyada toplanır ve her yere çağrılırlar.

```javascript
export const ActionTypes = {
    ADD_TODO:'ADD_TODO',
    DELETE_TODO:'DELETE_TODO',
    UPDATE_TODO:'UPDATE_TODO'
}

 case ActionTypes.ADD_TODO:  // şeklinde çağrılırlar
```

8. Actions : dispatch ile her seferinde emir girerken emrin tipini ve eklenecek elemanı vermek her seferinde benzer kodları yazmak anlamına geleceği için bu emirler de farklı bir dosyada tutulabilir.

```javascript
// payloadı olmayan bir aksiyon tanımlama
const ADD_COUNT =  {
    type: 'ADD_COUNT',
};


export const deleteTodo= (payload) => ({ 
    type:ActionTypes.DELETE_TODO,
    payload
})

  dispatch(addTodo(newTodo))  // şeklinde kullanılır
```

### Dikkat !!!
- Hem api hem de redux kullanılan projelerde store u güncelleme api isteğine bağımlı hale getirilmelidir.api isteği başarılı olursa store değiştirilmelidir.

```javascript
 axios.post('/todos',newTodo).then(()=>{
          //api ye başarılı bir şekilde kayıt yapıldıktan sonra reducer a emir gönderiyoruz
          dispatch(addTodo(newTodo))

        })
```



![](redux.jpg)


* Benzersiz id oluşturma

- universally unique identifier kütüphanesini kullanma

 - kütüphaneyi indir
`npm i uuid`

- kullanmak istediğin bileşene import et
`import { v4 } from 'uuid'`

- fonsiyonu çağır
  `id:v4()` 