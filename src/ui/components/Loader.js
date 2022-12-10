export default function Loader({text = 'Loading'}) {
    return (
        <div className="loader text-center">
            <div className="mx-auto bg-white p-3 d-flex align-items-center">

                <div className="spinner-border text-primary"></div>
                <span className="ml-3">{text + '...'}</span>

            </div>
        </div>
    );
}