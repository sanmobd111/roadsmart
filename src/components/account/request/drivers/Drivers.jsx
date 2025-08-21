import BackGroundColorDiv from '@/components/shared/background-color-div/BackGroundColorDiv';
import SectionHeadingWithBottomBorder from '@/components/shared/section-heading/SectionHeadingWithBottomBorder';
import Image from 'next/image';

export default function Drivers() {
    return (
        <div>
            <SectionHeadingWithBottomBorder text={"Drivers"} />
            <div>
                <div className="flex gap-2 mt-4 items-center">
                    <BackGroundColorDiv>

                        <Image src={"/icon/driver.svg"} className="w-16 h-16 object-cover" width={40} height={40} />
                    </BackGroundColorDiv>
                    <p className="font-medium">Stella Bella (A99087)</p>
                </div>
                <div className="flex gap-2 mt-4 items-center">
                    <BackGroundColorDiv>

                        <Image src={"/icon/driver.svg"} className="w-16 h-16 object-cover" width={40} height={40} />
                    </BackGroundColorDiv>
                    <p className="font-medium">Danial (A100098)</p>
                </div>
            </div>
        </div>
    )
}
