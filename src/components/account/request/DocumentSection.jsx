import SectionHeading from '@/components/shared/section-heading/SectionHeading'
import DocumentCard from './DocumentCard'

export default function DocumentSection({ handleUpload }) {
    return (
        <div>
            <div className="flex justify-between items-center border-b border-gray-400 mb-4 pb-2">
                <SectionHeading text={"Documents"} />
                <p className="text-gray cursor-pointer" onClick={handleUpload}>+ upload</p>
            </div>
            <DocumentCard />
        </div>
    )
}
