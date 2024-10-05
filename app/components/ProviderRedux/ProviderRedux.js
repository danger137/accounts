'use client';

import meraStore2 from "@/store/store";
import { Provider } from "react-redux";
export default function ProviderRedux({children}){



return <Provider store={meraStore2} >

{children}

</Provider>



}