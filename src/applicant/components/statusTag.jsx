

export default function StatusTag({ status }) {
    return (
        <div className={' w-max text-white px-4 py-1' + ' ' +  (status === 'Applied' ? 'bg-orange-400' : status === 'Interview' ? 'bg-blue-400' : 'bg-green-600')} style={{'borderRadius': '10rem'}}>
            <p className='text-xs'>{status}</p>
        </div>
    )
}

