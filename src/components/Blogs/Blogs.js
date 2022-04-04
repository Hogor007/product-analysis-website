import React from "react";
import "flowbite";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-6">QNA Section </h1>
      <hr className="container mx-auto w-2/5" />
      <div className="container mx-2 md:w-2/4 md:mx-auto mt-6">
        <h1>
          <strong>Q1 : What is Context API??</strong>
        </h1>
        <p className="border-2 p-4 rounded-md mt-4">
          The Context API is a component structure in the React framework that allows us to communicate specific sorts of data at all levels of the application. Its purpose is to address the issue of prop drilling. Context API is useful for transmitting data that is considered global, such as the presently authorized user, the theme choices for the application, and so on. We can use the Context API without needing to use any additional modules once we have this type of data. In fact, the Context API may be used in any situation when you need to transmit a prop through a component to another component higher down the tree. The createContext function is used to create a context object.
        </p>
        <br />
        <h1>
          <strong>Q2 : What is Semantic Tag?</strong>
        </h1>
        <p className="border-2 p-4 rounded-md mt-4">
          Semantic HTML tags enable the addition of meaning to markup, allowing search engines, screen readers, and web browsers to understand it. Semantic HTML tags enable users to receive structured content, which is especially important for on-page SEO and accessibility. Semantic Tags include :
          &lt;html&gt;,&lt;head&gt;,&lt;body&gt;,&lt;p&gt;,&lt;img&gt; and so on.
        </p>
        <br />
        <h1>
          <strong>
            Q3: What is the difference between Inline, Block and Inline-block?
          </strong>
        </h1>
        <br></br>

        <div>
          {" "}
          <strong>
            The distinctions between show inline, block, and inline-block are as follows:
          </strong>{" "}
          <br /> <br />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Block
                  </th>
                  <td className="px-6 py-4">
                    A block element always begins on a new line and occupies the horizontal space on the web page to the left and right.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Inline
                  </th>
                  <td className="px-6 py-4">
                    Inline elements display on the same line as the content and tags beside them, rather than on a separate line.
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Inline-block
                  </th>
                  <td className="px-6 py-4">
                    Inline-block elements are identical to inline elements, except they have the ability to have padding and margins on all four sides.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
