import React from 'react'
import { urlFor } from "@/utils/sanity-utils";
import Image from "next/legacy/image";

const ImagePortableCom = ({ value }) => {
    if (!value?.asset?._ref) {
        return value;
    }
    return (
        <>
            <div className='flex justify-center items-center flex-col'>
                    <img
                        alt={value.alt || "Image"}
                        loading="lazy"
                        src={`${urlFor(value)}`}
                        style={{ width: '80%', height: 'auto' }}
                        objectFit='contain'
                    />
                {
                    value.alt &&  <i className='text-gray-600 flex justify-center text-center'>{value.alt}</i>
                }
            </div>
        </>
    );
}

export default ImagePortableCom