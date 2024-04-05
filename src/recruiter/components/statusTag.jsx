

export default function StatusTag({ status }) {
    return (
        <div className={' w-max text-white px-4 py-1' + ' ' +  (status === 'Applied' ? 'bg-orange-400' : status === 'Fulfilled' ? 'bg-blue-400' : 'bg-orange-400')} style={{'borderRadius': '10rem'}}>
            <p className='text-xs'>{status}</p>
        </div>
    )
}

