/* eslint-disable @next/next/no-img-element */
import { Spacer } from '@nextui-org/react';

export default function AuthorCard() {
    return (
        <div className="author-card">
            <div className="h-32 w-32 mb-4 lg:mb-0 mr-4">
                <img
                    src="/nath-sqr.jpg"
                    alt="Nathalia Trazzi"
                    className="h-full w-full rounded-full overflow-hidden shadow"
                />
            </div>
            <Spacer y={1} />
        </div>
    );
}
