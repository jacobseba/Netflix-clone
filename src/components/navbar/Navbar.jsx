import React, { useState } from 'react'
import "./navbar.scss"
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0? false:true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                    <img 
                        src="data:image/jpeg;base64,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"
                        alt=""
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img 
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEXRUhn////PSgDRUBXPRgDmpIjQThDQTQv99/Tdhmj++vjinYnOQADxz8PWYCj78/H24NbdgVrVZDXswbbloYn67efZdVHbf17uwa/nqpTSVBXz1szvyr7vx7jZckjad0703Nbjl3jor5r23dHgknn45t/SWCbcfVXXaj7svKrVYjPorpjYbDzgkHLjm4HTWR7bgWPZcELhmILrt6JzLQFfAAAIv0lEQVR4nO2dW3uiMBCGMUkTpaLWFUUQPFQ8tci6/v//tqB1C5KEoHYFnnkvelMh+UgymZwmmnYF1ozGf0A3fX/mHufz6e46Bz8NGv+4uqZhvS6nfZsQwhjG/1tg62fFme5+s9IoQvS/SzuDQ//n5PXcgYfI07SdQYufkmcuRjuG6BO1naDD5k+o03vHQ5uwZxbdBfIjZsZqdcjTC+8MRt2HyzMHdjlK7wR7e7S+90GHlEae9ng7YwYhKpO+qBk6j9Tnj1nJ9GnYfqTCSb88ze9CjsKeXkCf/1YW85lCWksX+wIC3R16thgu6EVcJgei7s81g1IWYATuCLKsjzukpVxJ/bdyFmAMcblZNqYIM/6/eAI77Nk6xNBNtirqxiiqc9RTdXfcsKQ19AzLDA/ff2txkaC5okCj3AKjenpIlqJvddrnXk3VGTBYyQVGpbgZ975K77jsX5xKjNSGVf6m9AKjtoi01Xq93qy0hNOl6JM3+yU2MgkwphGpuQZyVBGoB+XtJvJASlOMW1o6T1QV3OkpCDTLNpQoAD0ouGx6q7p1VGMjBVM6qLBAJYVuheuoksL3VZUFKij0N9XoCUXkKuxWXKCG+/Lewj9U2crE5MzgmF7FS1DLWVU0dtUXKJ7fiNiuKjCeyId8iGzMoHzTojeBV3zf2/ks1brEPdAdx9iYQdnnLIpAyUd6Mkrv7UmlPbUMGA2t7znT7jYIq94JZqFMW48tx7eO843GamJhrsAUEdIm8YaKZ2cFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDng795dlYUwRnoGcHv7QQkgej3cWSJx32VdBZPMPSF4N34lNVOP4E3jPG4P2dLx/jm1zcTjy+RTtedBHY7QfEDbfjrNW8JWoMv+vzXITfOqtNLYHZj3kPeA2ggOkL5wj/fRN71ZoJukt6mqETint+mJ7nk4Df3kCrui0JX+YT3e9YSndd22tw8tSXnu83CcWokccYajT33GyNhfDWXqxB/moLfd7ntAIeSLDmF4w9k4zclOHJzjCzR7/m1DtvC6B7ciBfSLG0LH9yjG0moLZNXi+hGVCSNKb8GkYnoAcPmlAj5Jc6Rzq9WMvBKdiC+w8mAuJI2BCfrJOG8WtmWjjmBz/5hCoyfDCQLY3TMfjFJ6Kp3wffFfWECvaz1l3zBKAluu5EjtnQNruUSni7nfo+vjyJuCeNrY0NDYSOImN9wfhYz2Rut6wygQPxBAlEEBLQVPqOP06WSE2Twpkgu8mhb+7REMhR/D3FINbSUpDBvfz+GmbTRNIybztBST/ZOff8dcBkzEkgK3BDWINyXRYOaDL/8Q4zYSB6Br7glPb2XvkvfOhnZhEXOKiP2UFqDOHbxAhL2FzGmO++gyOX8DBx5tJpbA++xnGjiTWcRvE3fgoUjj1IpCRJAp/IkGilnUcj2Bkt6Sl7WAakjTb79kCQ+RUV4GmNJmigRm7oCjGSxZKTuryo8txdThOKrLMJIJUOiWAVSV1cVgzty+pfE7v5C1LNDHUzsw3J8nBiO3zOMxXgkirOvFp5RzlJu5pDYUVBlcuXERqa9s5iljHvXt7w2zx484G4GPycYCbZljoUKzUO6eFjY4nYtZrDitJf7496v8yI6kSJRu3lYqVaIiSfsOt+9rLeLO3d+YSN3vgiH8m43D3OXTIHSD0m1a35kDatyvGI+XakhPSN18fNJuTOsLxyFn3Hta4uD8V2XMY1VumK5y5mDkewIqHRQe8LpX0uk3h31NM/MfH3FO7p9M2lHMVOo8H6mbyS338fUnaoFjmPrW+9i0VMDM7XK4GZmSMQTTHkoD0vR7yL3PCQYJFuBdBIgQWbSqkCA+zT8GTkuN14ZZCVnxNRv5cncM4BtlajFGdwCCwsYjW8oRStV39T7bn93bW2Yd4MpmMh8+qxEIpziF7JN2THx/DLnyYyTijaFS9EtGnqscCleWQzxKkgWPbv0wzYFr7zhOA95kLci/ZI+aF+lcDRNv5mF+7SRNRG0ULdsBtfJq4DEHiUnhYyd3niHQyvLn9cM4+OCY+UxGig7V45iP3gNRS9qxai7NmdOPF7hzII4MH7+0M5RainmAN8aIRajw1YhjV4g9JUwT1AS6ZQVpft8g9O0dvfEF6UsGQyS/wX3K7HA3f5FzkgqEaPOXl6NusfNvVeG0GiALp48NA15gM9cc7HOyR5GJJiIRJrO3H7EtUuYhKMB14d2BkNb7gliW+58c4xoBkS9pZX9xuZx6dmPCp+KGSLtz/lxNvPNE74/m7x4KhEwaUdmkLsZb4abPI2SR+v90ZnNer3ZbGaNgw5pPzz+ZpyMHW68mF0Yq1N6jIkXaiNPXd0GnsKKEmKH8V/hdOTdXLa7FNk7gzyhPdwWr2Sl3Msk9DHd2kSRFviYVnFPsrTwfMxuxpGtNBgFVwM+d1i3ONKMvPgX56hpup/kuVdX/wQYhcuj4TiGtQgifRoLd3WTGPsNWhiGNO7McNSHTGpwZUSar92o2mnEETnUumS5vZq8HS5DJjI/dR8qTmmFoF6zYbrj1z+vH8bFja7yHV9ZePPDTq0U8u7a1YW7syoIf1fgpEadIuHPgAv2yFcQHM64CguspZQcKthJaNbG1qBXrsBGo8IXl6ZBohXBXzVRiJloLbFXE/9bcqcZ/zRM5WCBUKHgxFHVkOyqdOrRX7T5veEJ/pmqiiE5b9RofNbB1OC+ZN67FuNgOpUoXNShIUoV1mKkL1VYC2MqVdiTbjyvCFJLM6uDQg1JNhzUQ6HspEg9FNJPiaWph2MqHB/WxJbGG2suLVG/bpJ1marB7fHZN9WDqwXhvB011QHt/riRSCscphXW6EZhjJi20ihOX9N+61nFknJaXMN2ou/oDmtTSRNg9N0Ux3UYO2XB6OO8pt+sxdCJB0YjN9Lojup58fUJRuJARPWsogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg4S+BYpUu1gsZjQAAAABJRU5ErkJggg=="
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
