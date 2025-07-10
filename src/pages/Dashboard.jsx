import React from 'react'
import { Container } from '../components/Container'
import ModuleBtn from '../components/ModuleBtn'
import { HiOutlineDatabase } from "react-icons/hi";
import { HiDesktopComputer } from "react-icons/hi";
import { HiDocumentDuplicate } from "react-icons/hi";

const Dashboard = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4">
          <div className="col-span-1 row-span-1">
            <ModuleBtn name={"Product Module"} icon={<HiOutlineDatabase className="size-10"/>} url={"/product"} />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn name={"Sale Module"} icon={<HiDesktopComputer className="size-10"/>} url={"/sale"} />
          </div>
          <div className="col-span-1 row-span-1">
            <ModuleBtn name={"Voucher Module"} icon={<HiDocumentDuplicate className="size-10"/>} url={"/voucher"} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Dashboard