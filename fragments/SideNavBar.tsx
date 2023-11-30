"use client";
import Link from "next/link";
import { useEffect } from "react";

const FSideNav = () => {
  interface FSideNavConstructor {
    new (element: HTMLElement): FSideNavInterface;
  }

  interface FSideNavInterface {
    element: HTMLElement;
    // ... other properties and methods
  }

  function FSideNav(this: FSideNavInterface, element: HTMLElement) {
    this.element = element;
    // ... other constructor logic
  }

  const yourElement = document.getElementById("float-sidenav-id");
  if (yourElement) {
    const FSideNavInstance: FSideNavInterface =
      new (FSideNav as unknown as FSideNavConstructor)(yourElement);
  }

  useEffect(() => {
    const Util = {
      hasClass: (el: Element, className: string) =>
        el.classList.contains(className),
      addClass: (el: Element, className: string) => el.classList.add(className),
      removeClass: (el: Element, className: string) =>
        el.classList.remove(className),
      toggleClass: (el: Element, className: string, bool: boolean) =>
        bool ? Util.addClass(el, className) : Util.removeClass(el, className),
      setAttributes: (el: Element, attrs: { [key: string]: string }) => {
        for (const key in attrs) {
          el.setAttribute(key, attrs[key]);
        }
      },
      getChildrenByClassName: (el: Element, className: string) => {
        const children = el.children;
        const childrenByClass = [];
        for (let i = 0; i < children.length; i++) {
          if (Util.hasClass(children[i], className))
            childrenByClass.push(children[i]);
        }
        return childrenByClass;
      },
      is: (elem: Element, selector: string | Element) => {
        if (selector instanceof Element) {
          return elem === selector;
        }

        const qa =
          typeof selector === "string"
            ? document.querySelectorAll(selector)
            : selector;
        let length = qa.length;

        while (length--) {
          if (qa[length] === elem) {
            return true;
          }
        }

        return false;
      },
    };

    function FSideNav(this: any, element: HTMLElement) {
      this.element = element;
      this.triggers = document.querySelectorAll(
        '[aria-controls="' + this.element.getAttribute("id") + '"]'
      );
      this.list = this.element.getElementsByClassName(
        "js-float-sidenav__list"
      )[0];
      this.sectionsContainer = document.getElementsByClassName(
        "js-float-sidenav-target"
      );
      this.firstFocusable = getFSideNavFirstFocusable(this);
      this.selectedTrigger = null;
      this.showClass = "float-sidenav--is-visible";
      this.clickScrolling = false;
      this.intervalID = false;
      initFSideNav(this);
    }

    function getFSideNavFirstFocusable(nav: any) {
      const focusableEle = nav.element.querySelectorAll(
        '[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary'
      );
      let firstFocusable = false;
      for (let i = 0; i < focusableEle.length; i++) {
        if (
          focusableEle[i].offsetWidth ||
          focusableEle[i].offsetHeight ||
          focusableEle[i].getClientRects().length
        ) {
          firstFocusable = focusableEle[i];
          break;
        }
      }

      return firstFocusable;
    }

    function initFSideNav(nav: any) {
      initButtonTriggers(nav); // mobile version behaviour
    }

    function initButtonTriggers(nav: any) {
      if (!nav.triggers) return;

      for (let i = 0; i < nav.triggers.length; i++) {
        nav.triggers[i].addEventListener("click", function (event: Event) {
          openFSideNav(nav, event);
        });
      }

      nav.element.addEventListener("click", function (event: Event) {
        if (
          (event.target as HTMLElement).closest(
            ".js-float-sidenav__close-btn"
          ) ||
          Util.hasClass(event.target as Element, "js-float-sidenav")
        ) {
          closeFSideNav(nav, event);
        }
      });

      window.addEventListener("keyup", function (event: KeyboardEvent) {
        if (
          (event.keyCode && event.keyCode == 27) ||
          (event.key && event.key.toLowerCase() == "escape")
        ) {
          closeFSideNav(nav, event);
        }
        if (
          (event.keyCode && event.keyCode == 9) ||
          (event.key && event.key.toLowerCase() == "tab")
        ) {
          if (
            !(document.activeElement as HTMLElement).closest(
              ".js-float-sidenav"
            )
          )
            closeFSideNav(nav, event, true);
        }
      });
    }

    function openFSideNav(nav: any, event: Event) {
      event.preventDefault();
      nav.selectedTrigger = event.target;
      (event.target as HTMLElement).setAttribute("aria-expanded", "true");
      Util.addClass(nav.element, nav.showClass);
      nav.element.addEventListener("transitionend", function cb(event: any) {
        nav.element.removeEventListener("transitionend", cb);
        nav.firstFocusable.focus();
      });
    }

    function closeFSideNav(nav: any, event: Event, bool?: boolean) {
      if (!Util.hasClass(nav.element, nav.showClass)) return;
      if (event) event.preventDefault();
      Util.removeClass(nav.element, nav.showClass);
      if (!nav.selectedTrigger) return;
      (nav.selectedTrigger as HTMLElement).setAttribute(
        "aria-expanded",
        "false"
      );
      if (!bool) (nav.selectedTrigger as HTMLElement).focus();
      nav.selectedTrigger = false;
    }

    const intersectionObserverSupported = true; // Replace with actual logic

    // Call your FSideNav function with the desired element ID or element reference
    const yourElement = document.getElementById("float-sidenav-id");
    if (yourElement) {
      const FSideNavInstance: FSideNavInterface =
        new (FSideNav as unknown as FSideNavConstructor)(yourElement);
    }
  }, []);

  return (
    <div id="float-sidenav-id" className="float-sidenav js-float-sidenav">
      <nav className="float-sidenav__nav">
        <button className="reset float-sidenav__close-btn js-float-sidenav__close-btn ">
          <svg className="icon icon--xs" viewBox="0 0 16 16">
            <g
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            >
              <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
              <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
            </g>
          </svg>
        </button>
        <ul className="js-float-sidenav__list">
          <Link className="float-sidenav__link" href="#BookSection">
            Livros
          </Link>
          <Link className="float-sidenav__link" href={"./AboutMe"}>
            Sobre Mim
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default FSideNav;
