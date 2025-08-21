import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SocialSignIn() {
    return (
        <div className="mt-6">
            <div className="relative">
                {/* <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div> */}
                <div className="relative flex gap-4 items-center text-sm">
                    <span className="bg-white text-gray-500">
                        Or continue with
                    </span>
                    <div className="flex justify-center space-x-4">
                        <Link href={"#"}>
                            <Image
                                src={"/images/social-login-images/google.svg"}
                                alt="google"
                                width={50}
                                height={50}
                                className="w-8 h-8"
                            />
                        </Link>
                        <Link href={"#"}>
                            <Image
                                src={"/images/social-login-images/facebook.svg"}
                                alt="google"
                                width={50}
                                height={50}
                                className="w-8 h-8"
                            />
                        </Link>
                        <Link href={"#"}>
                            <Image
                                src={"/images/social-login-images/apple.svg"}
                                alt="google"
                                width={50}
                                height={50}
                                className="w-8 h-8"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
