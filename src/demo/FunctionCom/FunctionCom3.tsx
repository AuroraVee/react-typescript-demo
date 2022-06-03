//App.tsx
import React from "react"
import {type IProps} from '../../types'
// 定义组件
function MyComponent<P extends IProps >(props: P) {
    type ArticleInfo = {
        title: string;
        content: number;
      };
      const [article, setArticle] =React.useState<ArticleInfo>({ title:"zgc", content:1 });

      React.useEffect( () => {
          const f=async()=>{
            const user = await getUser()
            setArticle(user)
          }

          f()
      
      }, [])
    
      const getUser=():ArticleInfo=>{
          return {title:"test",content:100}
      }
    
  const {name ,age } = props
  return <span>{name} {age}</span>;
}
export default MyComponent;
