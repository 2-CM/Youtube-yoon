import 'react-loading-skeleton/dist/skeleton.css';

import Skeleton from 'react-loading-skeleton';

const SkeletonVideoCard = ({ layout = 'vertical' }) => {
    if (layout === 'horizontal') {
        return (
            <div className="relative flex gap-4 h-24">
                {/* 썸네일 */}
                <div className="w-40 h-full rounded-2xl overflow-hidden">
                    <Skeleton height="100%" />
                </div>
                {/* 콘텐츠 */}
                <div className="flex flex-col flex-1 gap-1">
                    <Skeleton width="80%" height={20} />
                    <Skeleton width="60%" height={16} />
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex flex-col gap-2 mt-2">
            {/* 썸네일 */}
            <div className="w-full aspect-video rounded-xl overflow-hidden">
                <Skeleton height="100%" />
            </div>

            {/* 콘텐츠 */}
            <div className="flex w-full">
                <Skeleton circle width={36} height={36} />
                <div className="flex flex-col pr-6 ml-3 flex-1 gap-1">
                    <Skeleton width="100%" height={20} />
                    <Skeleton width="70%" height={16} />
                </div>
            </div>
        </div>
    );
};

export default SkeletonVideoCard;
