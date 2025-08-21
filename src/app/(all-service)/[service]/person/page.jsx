"use client"

import PersonStep1 from "@/components/person-steps/PersonStep1"
import PersonStep2 from "@/components/person-steps/PersonStep2"
import PersonStep3 from "@/components/person-steps/PersonStep3"
import PersonStep4 from "@/components/person-steps/PersonStep4"
import Container from "@/components/shared/container/Container"
import StepProgressbar from "@/components/step-progressbar/StepProgressbar"
import Title from '@/components/ui/Title'
import { addPerson, selectPerson } from "@/store/Feature/person-slice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const sexOptions = [{
    label: "Female(F)",
    value: "Female(F)"
}, {
    label: "Male(M)",
    value: "Male(M)"
}, {
    label: "Other",
    value: "Other"
}, {
    label: "Prefer not to say",
    value: "Prefer not to say"
}]
const licenseOptions = [{
    label: "1 year",
    value: 1
}, {
    label: "2 years",
    value: 2
}, {
    label: "3 years",
    value: 3
}, {
    label: "4 years",
    value: 4
}, {
    label: "5 years",
    value: 5
}]

export default function page() {

    const persons = useSelector((state) => state?.person?.persons);
    const dispatch = useDispatch();

    const [step, setStep] = useState(1)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [sex, setSex] = useState("");
    const [license, setLicense] = useState("");
    const selectedPersonForService = persons.filter((person) => person.selected)

    const handleNext = () => {
        if (step == 4) {
            dispatch(addPerson({ firstName, lastName, license, sex, id: persons.length + 1 }))
            setStep(1)
            return;
        }
        setStep(step + 1)
    }

    const progress = {
        1: 0,
        2: 0,
        3: 33,
        4: 66
    }
    const togglePersonForService = (personId) => {
        console.log(personId, "deviceId")
        dispatch(selectPerson({ id: personId }));
    }

    return (
        <Container>
            <div className="w-full">
                <div className="w-full mx-auto ">
                    {
                        step === 1 && <PersonStep1 handleNext={handleNext} persons={persons} togglePersonForService={togglePersonForService} selectedPersonForService={selectedPersonForService} />
                    }

                </div>
                {
                    step > 1 && <div className="w-full  h-[70vh]  my-10 lg:my-20">
                        <Title text={"Add Person"} className={"text-center pb-4 border-b  mb-4 lg:mb-14"} />
                        <div className="lg:w-[50%] mx-auto">
                            {
                                step >= 2 && <div className="custom-shadow p-10 rounded-xl">
                                    {
                                        step === 2 && < PersonStep2 firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} />
                                    }
                                    {
                                        step === 3 && <PersonStep3 sex={sex} setSex={setSex} sexOptions={sexOptions} />
                                    }
                                    {
                                        step === 4 && <PersonStep4 license={license} setLicense={setLicense} licenseOptions={licenseOptions} />
                                    }

                                    {
                                        step !== 1 && <StepProgressbar progress={progress[step]} handleNext={handleNext} handlePrev={() => setStep(step - 1)} containerClassName={"mt-4 lg:mt-8 max-w-auto p-0 w-[90%]"} />
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </Container>
    )
}
