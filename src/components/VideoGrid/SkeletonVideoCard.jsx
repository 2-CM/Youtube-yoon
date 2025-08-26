import 'react-loading-skeleton/dist/skeleton.css';

import Skeleton from 'react-loading-skeleton';

const SkeletonVideoCard = () => {
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
