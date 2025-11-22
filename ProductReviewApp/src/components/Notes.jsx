import classNames from 'classnames';
function Notes()
{
    const textAClass=classNames('w-full','h-full','p-3',
       'border', 'border-gray-300', 'rounded-md',
        'shadow-sm', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500', 'focus:border-blue-500');

    return <div className='flex flex-col h-full'>
        <h1 className='font-bold'>Notes</h1>
        <textarea className={textAClass} rows={18} ></textarea>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer'>Save</button>
    </div>
}
export default Notes;