import { FilterType } from '@/app/types/FilterType';
import React from 'react'

interface Props {
    activeFilter: FilterType;
    action: () => void;
    count: number;
}

const ActiveFilterButton: React.FC<Props> = ({ activeFilter, action, count }) => {
    return (
        <button className='
        flex flex-col gap-1 w-auto z-50 
        fixed bottom-4 left-2   
        rounded-xl p-2 pr-4 
        bg-primary/80 text-xs
        hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent text-left'
            onClick={action}>
            {activeFilter !== FilterType.All ? (
                <>
                    <p className='text-text-accent'>{activeFilter}</p>
                    <p>Clear Filter</p>
                </>
            ) : (
                <>
                    <p>Set Filter</p>
                </>
            )}  
        </button>
    )
}

export default ActiveFilterButton