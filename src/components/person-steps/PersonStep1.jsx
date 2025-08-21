import AddButton from '@/components/ui/AddButton'
import Title from '@/components/ui/Title'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import Container from '../shared/container/Container'
import BackButton from '../shared/back-button/BackButton'
import { useRouter } from 'next/navigation'

export default function PersonStep1({ handleNext, persons, togglePersonForService, selectedPersonForService }) {
    const router = useRouter()

    return (
        <Container className={"lg:!my-20"}>
            <div className='w-full mx-auto lg:min-h-[70vh]'>
                {/* <Title text={"Was any one injured during the incident?"} className={"text-center text-nowrap"} /> */}
                <h1 className="relative pl-10 lg:pl-0 text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8 pb-4">
                    Was any one injured during the incident?
                    <BackButton onclick={() => {
                        router.back()
                    }} className={"top-0"} />

                </h1>
                <hr className='my-6 lg:my-10' />

                <div className='w-[80%] mx-auto'>
                    <div className=' mb-4 lg:mb-8 lg:w-[50%] mx-auto block'>
                        {
                            persons.length > 0 && persons.map((p, index) => (
                                <div className='flex justify-between items-center mb-4 border border-gray-400 px-4 py-2 rounded-lg'>
                                    <div className='flex gap-4 items-center'>
                                        <Image className='w-10 h-10' src={"/icon/person.svg"} width={20} height={20} />
                                        <p className='text-sm lg:text-lg'>{p.firstName} {p.lastName}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {/* Toggle Switch for Service Selection */}
                                        <div className="flex flex-col items-center">
                                            <button
                                                onClick={() => togglePersonForService(p.id)}
                                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${p.selected
                                                    ? "bg-primary"
                                                    : "bg-gray-200"
                                                    }`}
                                                role="switch"
                                                aria-checked={p.selected}
                                            >
                                                <span
                                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${p.selected
                                                        ? "translate-x-6"
                                                        : "translate-x-1"
                                                        }`}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <AddButton text={"Add Person"} handleNext={handleNext} className={"lg:w-[50%] mx-auto block"} />

                    {
                        selectedPersonForService.length > 0 && <Link href={"/claim/damage"}>
                            <Button
                                className="bg-primary w-1/3 m-auto flex mt-8 hover:bg-primary text-white px-8 py-6 rounded-lg font-medium"
                                disabled={selectedPersonForService.length === 0}
                            >
                                Next
                            </Button>
                        </Link>
                    }
                </div>
            </div>
        </Container>
    )
}
