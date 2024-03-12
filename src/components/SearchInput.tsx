import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FormEvent, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useGameQueryStore from '../store';

// interface Props {
//     onSearch: (searchText: string) => void;
// }

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useGameQueryStore(s => s.setSearchText)

    const onSubmit = (event: FormEvent) => {
        event?.preventDefault()
        console.log("CCCC", ref.current?.value)
        if (ref.current) setSearchText(ref.current.value)
    }

  return (
    <form onSubmit={onSubmit}>
    <InputGroup>
        <InputLeftElement children={<BsSearch/>}/>
        <Input ref={ref} borderRadius={20} placeholder="Search games.. " variant={'filled'}/>
    </InputGroup>
    </form>
  )
}

export default SearchInput