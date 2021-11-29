import { useRouter } from "next/router";
import {ImCross} from 'react-icons/im'
import { useSelector } from "react-redux";
import {StyledSearchView, StyledSearchViewItem} from './SearchView.css'

const type = {
  'all':'전체',
  'buy':'즉시구매',
  'auction':'경매'
}




const SearchView = () => {
  const router = useRouter();
  const {category} = useSelector(state=>state.explore)


const handleDeleteDesigner = (name)=>{
  let data = {...router.query};
    if(typeof data.designer=='string'){
      delete data.designer;
    }else{
      data['designer']=data['designer'].filter(v=>v!=name);
    }
    router.replace({
      pathname: '/',
      query: data,
    })
}

const handleDelete = (group)=>{
  let data = {...router.query};
  delete data[`${group}`];
  router.push({
    pathname: '/',
    query: data,
  })
}

const renderSearchButton = ()=>{
  const query = Object.entries(router.query)
  const item = []; 
  query.forEach(v=>{
    if((typeof v[1]) =='string'){
      item.push(v);
    }else{
      const arr = v[1]
      for(let i = 0; i<arr.length;i++){
        item.push([v[0],arr[i]])
      }
    }
  })
  return item.map(v=>{
    switch(v[0]){
      case 'type':
        return <StyledSearchViewItem key={v[0]+v[1]} onClick={()=>handleDelete('type')}><span>{'유형: '+type[v[1]]}</span><ImCross size={16}/></StyledSearchViewItem>
      case 'category':
        const big = category.filter(b=>b.code==v[1].substr(0,2))[0]
        const mid = big.list.filter(m=>m.code==v[1])[0]
        return <StyledSearchViewItem key={v[0]+v[1]} onClick={()=>handleDelete('category')}><span>{'카테고리: '+big.name+':'+mid.name}</span><ImCross size={16}/></StyledSearchViewItem>
      case 'designer':
        return <StyledSearchViewItem key={v[0]+v[1]} onClick={()=>handleDeleteDesigner(v[1])}><span>{'디자이너: '+v[1]}</span><ImCross size={16}/></StyledSearchViewItem>
      case 'priceMin':
        return <StyledSearchViewItem key={v[0]+v[1]} onClick={()=>handleDelete('priceMin')}><span>{'가격: '+v[1]+'klay 이상'}</span><ImCross size={16}/></StyledSearchViewItem>
      case 'priceMax':
        return <StyledSearchViewItem key={v[0]+v[1]} onClick={()=>handleDelete('priceMax')}><span>{'가격: '+v[1]+'klay 이하'}</span><ImCross size={16}/></StyledSearchViewItem>
      case `search`:
        return <StyledSearchViewItem key={v[0]+v[1]} onClick={()=>handleDelete('search')}><span>{'검색: '+v[1]}</span><ImCross size={16}/></StyledSearchViewItem>
      }
  })
}

  return (
    <StyledSearchView>
      {renderSearchButton()}
    </StyledSearchView>
  );
}

export default SearchView;