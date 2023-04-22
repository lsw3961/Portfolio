import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Resume() {
    return (
        <section id="resume" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20 divide-y">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Resume
                    </h1>
                    <div className="flex items-center justify-center">
                        <iframe src="https://drive.google.com/file/d/1vzQAS2nJpt_XE--wudYFuk70OA9UQFDx/preview" width="640" height="480" allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
