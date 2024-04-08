export default function FooterPrintComponent() {
    return (

        <div className='mt-6 flex justify-between '>
            <div>
                generated on {new Date().toLocaleDateString()}
            </div>
            <div>
                For more detailed information, please visit <a href='https://stec.sk' className='text-blue-500 underline'>www.stec.sk</a>
            </div>
        </div>

    )
}