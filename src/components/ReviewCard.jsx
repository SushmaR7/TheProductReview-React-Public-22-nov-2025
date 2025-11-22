import classNames from 'classnames';
function ReviewCard({styleCls,children})
{
    const Cardstyl=classNames(styleCls,'w-full',
         'rounded', 'overflow-hidden', 'shadow-lg', 'bg-gray');
    return <div className={Cardstyl}>
        {children}
    </div>
}
export default ReviewCard;