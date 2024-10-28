import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome
import '../Style/VisitorCounter.css'; // Import CSS

function VisitorCounter() {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('visitCount');
        const newCount = storedCount ? parseInt(storedCount) + 1 : 0;

        localStorage.setItem('visitCount', newCount);
        setVisitCount(newCount);
    }, []);

    return (
        <div className="visitor-counter">
            <p>
                <i className="fa fa-users" aria-hidden="true"></i> {/* Icon người truy cập */}
                {visitCount}
            </p>
        </div>
    );
}

export default VisitorCounter;
