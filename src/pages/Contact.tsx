import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            <div className="mt-15">
                <ul className="grid place-content-center pt-8 w-auto">
                    <li className="mb-4">
                        <Link to="https://www.linkedin.com/in/aivangeronimo/" target="_blank" rel="noopener noreferrer" 
                            className="flex items-center justify-center gap-4 p-5 bg-white rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                                </svg>
                                <p className="w-full text-center font-md text-white">LinkedIn</p>
                        </Link>
                    </li>

                    <li className="mb-4">
                        <Link to="https://github.com/avnkrlo" target="_blank" rel="noopener noreferrer" 
                            className="flex items-center justify-center gap-4 p-5 bg-white rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                                </svg>
                                <p className="w-full text-center font-md text-white">Github</p>
                        </Link>
                    </li>

                    <li className="mb-4">
                        <Link to="https://www.sololearn.com/en/profile/486401" target="_blank" rel="noopener noreferrer" 
                            className="flex items-center justify-center gap-4 p-5 bg-white rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <svg className="w-6 h-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" stroke="#FFFFFF">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path className="a" d="M20.7143,30.3722c0-3.2261-6.3709-3.6715-6.3709-11.7725S18.8446,9.6954,18.8446,6.55,6.38,7.23,6.38,19.2922,20.7143,33.5983,20.7143,30.3722Z"></path>
                                        <path className="a" d="M30.3042,27.2168c-3.2261,0-3.6715,6.371-11.7724,6.371S9.6274,29.0865,6.4823,29.0865s.68,12.465,12.742,12.465S33.53,27.2168,30.3042,27.2168Z"></path>
                                        <path className="a" d="M17.6958,20.8178c3.2261,0,3.6714-6.371,11.7724-6.371s8.9044,4.5013,12.0495,4.5013-.68-12.465-12.742-12.465S14.47,20.8178,17.6958,20.8178Z"></path>
                                        <path className="a" d="M27.2864,17.6278c0,3.2261,6.371,3.6715,6.371,11.7725s-4.5012,8.9043-4.5012,12.05,12.465-.68,12.465-12.742S27.2864,14.4017,27.2864,17.6278Z"></path>
                                    </g>
                                </svg>
                                <p className="w-full text-center font-md text-white">Sololearn</p>
                        </Link>
                    </li>

                    <li className="mb-4">
                        <Link to="https://t.me/avngrnmo" target="_blank" rel="noopener noreferrer" 
                            className="flex items-center justify-center gap-4 p-5 bg-white rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#ffffff"></path>
                                    </g>
                                </svg>
                                <p className="w-full text-center font-md text-white">Telegram</p>
                        </Link>
                    </li>

                    <li className="mb-4">
                        <Link to="https://wa.link/4bd27x" target="_blank" rel="noopener noreferrer" 
                            className="flex items-center justify-center gap-4 p-5 bg-white rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
                                    <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                                </svg>

                                <p className="w-full text-center font-md text-white">WhatsApp</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.reddit.com/user/weezywiz29/" target="_blank" rel="noopener noreferrer" 
                            className="flex items-center justify-center gap-4 p-5 bg-white rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <svg className="w-6 h-6" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 429.709 429.709" xmlSpace="preserve" fill="#FFFFFF" stroke="#FFFFFF">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <g> 
                                            <path d="M429.709,196.618c0-29.803-24.16-53.962-53.963-53.962c-14.926,0-28.41,6.085-38.176,15.881 c-30.177-19.463-68.73-31.866-111.072-33.801c0.026-17.978,8.078-34.737,22.104-45.989c14.051-11.271,32.198-15.492,49.775-11.588 l2.414,0.536c-0.024,0.605-0.091,1.198-0.091,1.809c0,24.878,20.168,45.046,45.046,45.046s45.046-20.168,45.046-45.046 c0-24.879-20.168-45.046-45.046-45.046c-15.997,0-30.01,8.362-38.002,20.929l-4.317-0.959c-24.51-5.446-49.807,0.442-69.395,16.156 c-19.564,15.695-30.792,39.074-30.818,64.152c-42.332,1.934-80.878,14.331-111.052,33.785c-9.767-9.798-23.271-15.866-38.2-15.866 C24.16,142.656,0,166.815,0,196.618c0,20.765,11.75,38.755,28.946,47.776c-1.306,6.68-1.993,13.51-1.993,20.462 c0,77.538,84.126,140.395,187.901,140.395s187.901-62.857,187.901-140.395c0-6.948-0.687-13.775-1.991-20.452 C417.961,235.381,429.709,217.385,429.709,196.618z M345.746,47.743c12,0,21.762,9.762,21.762,21.762 c0,11.999-9.762,21.761-21.762,21.761s-21.762-9.762-21.762-21.761C323.984,57.505,333.747,47.743,345.746,47.743z M23.284,196.618 c0-16.916,13.762-30.678,30.678-30.678c7.245,0,13.895,2.538,19.142,6.758c-16.412,14.08-29.118,30.631-37.007,48.804 C28.349,215.937,23.284,206.868,23.284,196.618z M333.784,345.477c-31.492,23.53-73.729,36.489-118.929,36.489 s-87.437-12.959-118.929-36.489c-29.462-22.013-45.688-50.645-45.688-80.621c0-29.977,16.226-58.609,45.688-80.622 c31.492-23.53,73.729-36.489,118.929-36.489s87.437,12.959,118.929,36.489c29.462,22.013,45.688,50.645,45.688,80.622 C379.471,294.832,363.246,323.464,333.784,345.477z M393.605,221.488c-7.891-18.17-20.596-34.716-37.005-48.794 c5.247-4.22,11.901-6.754,19.147-6.754c16.916,0,30.678,13.762,30.678,30.678C406.424,206.867,401.353,215.925,393.605,221.488z"></path>
                                            <circle cx="146.224" cy="232.074" r="24.57"></circle> <circle cx="283.484" cy="232.074" r="24.57"></circle>
                                            <path d="M273.079,291.773c-17.32,15.78-39.773,24.47-63.224,24.47c-26.332,0-50.729-10.612-68.696-29.881 c-4.384-4.704-11.751-4.96-16.454-0.575c-4.703,4.384-4.96,11.752-0.575,16.454c22.095,23.695,53.341,37.285,85.726,37.285 c29.266,0,57.288-10.847,78.905-30.543c4.752-4.33,5.096-11.694,0.765-16.446C285.197,287.788,277.838,287.44,273.079,291.773z"></path>
                                        </g> 
                                    </g>
                                </svg>
                                <p className="w-full text-center font-md text-white">Reddit</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}