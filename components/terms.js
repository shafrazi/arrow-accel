import BackToSite from "./back-to-site";
import TermPoint from "./terms-point";

export default function Terms() {
  return (
    <div className="flex w-full justify-center my-6 md:my-16">
      <div className="w-11/12">
        <div className="px-3">
          <BackToSite />
          <h2 className="text-2xl font-bold text-black dark:text-white md:text-3xl mt-10 md:mt-16">
            Terms and conditions
          </h2>
          <div className="mt-12 bg-white text-black dark:text-gray-400 text-sm md:text-base">
            <p>
              ARROW ACCEL is pleased to set out their Terms and Conditions,
              which will apply to the work we do for you. These Terms and
              Conditions and the Quote/Production Estimate supplied to you form
              the contract between us for the provision of ARROW ACCEL services.
            </p>
            <ol className="list-decimal list-outside px-5 mt-10">
              <TermPoint point="ARROW ACCEL'S Role">
                <ol className="list-decimal list-outside px-6">
                  <li className="mt-4">
                    The Services: ARROW ACCEL will provide the services
                    described in the Quote/Production Estimate as presented. As
                    an assignment develops, it may be that the scope of the
                    required work changes. Where this is the case, ARROW ACCEL
                    will seek to discuss it with you at the earliest opportunity
                    in order to agree upon any variations to the scope of the
                    Services and the Quote/Production Estimate, which may be
                    necessary.
                  </li>
                  <li className="mt-4">
                    Authors Corrections. Unless specified in the Quote/Proposal,
                    we include 2 rounds of changes on all items following the
                    presentation of an initial concept. Revisions briefed
                    thereafter will be charged according to ARROW ACCEL’s
                    standard hourly rate card.
                  </li>
                  <li className="mt-4">
                    Information: To maximize ARROW ACCEL’s effectiveness we must
                    work with you as a team. Often ARROW ACCEL’s work will be
                    dependent on you (or your other advisers) providing
                    information promptly. To avoid unnecessary verification,
                    ARROW ACCEL will assume all information you provide is
                    complete and accurate unless you tell us otherwise.
                  </li>
                  <li className="mt-4">
                    Incidentals: Couriers or printed proofs from external
                    printers if required, to be charged to client.
                  </li>
                  <li className="mt-4">
                    Termination: Should you wish to terminate the contract after
                    the commencement of work, you will be invoiced for work
                    already completed.
                  </li>
                  <li className="mt-4">
                    Force Majeure: ARROW ACCEL shall not be liable for any delay
                    or failure to perform their obligations where such delay or
                    failure to perform arises from circumstances outside ARROW
                    ACCEL’s reasonable control.
                  </li>
                </ol>
              </TermPoint>
              <TermPoint point="Payment Terms">
                <ol className="list-decimal list-outside px-6">
                  <li className="mt-4">
                    Payment Terms: Invoices shall be settled by bank transfer
                    into ARROW ACCEL’s nominated bank account within 14 days of
                    the date on the invoice unless agreed otherwise. ARROW ACCEL
                    retain ownership of all work until full payment has been
                    made.
                  </li>
                  <li className="mt-4">
                    Other Specialist Services: ARROW ACCEL’s estimate is
                    exclusive of third-party costs such as photography,
                    illustration, video production, sound recording etc unless
                    otherwise included in the estimate. ARROW ACCEL may, unless
                    you instruct us otherwise, seek such specialist services on
                    areas outside our expertise. The costs of such services will
                    be passed on to and will be quoted according.
                  </li>
                </ol>
              </TermPoint>
              <TermPoint point="Scoping">
                <ol className="list-decimal list-outside px-6">
                  <li className="mt-4">
                    In most cases, ARROW ACCEL will provide a scoping document
                    which details the functionality in the work we do for our
                    clients, this includes but is not limited to a website,
                    application or marketing campaign. Where the client signs
                    and approves this scoping document, any changes beyond the
                    scope will be handled as a new update and priced
                    accordingly.
                  </li>
                </ol>
              </TermPoint>
              <TermPoint point="Content">
                <ol className="list-decimal list-outside px-6">
                  <li className="mt-4">
                    Content and Images: It is your responsibility to provide us
                    with the required information about your business and
                    marketing objectives. ARROW ACCEL takes no responsibility
                    for errors in content supplied by you. Any changes thus
                    incurred may be chargeable at standard rates. Unless
                    specified otherwise, it is your responsibility to provide
                    all necessary text and graphic materials that make up the
                    content of the work. All content must be supplied in a
                    suitable digital format unless agreed otherwise beforehand.
                    Images should be supplied as jpeg, gif, tif, png or psd
                    format. Text should be supplied as a Microsoft Word
                    document. Failure to supply material in an easily accessible
                    format may result in additional cost being incurred for
                    retyping text. Where the content which is provided is in a
                    form where a significant amount of copy writing is required,
                    a further charge may be made.
                  </li>
                  <li className="mt-4">
                    Information for charts, graphs, and infographics to be
                    supplied in Excel. If we are required to retype large
                    amounts of content, then additional costs may be incurred.
                  </li>
                  <li className="mt-4">
                    Client supplied images should always be high-res images at
                    300DPI for print purposes. If they are solely for use on the
                    web, then lower resolution images are acceptable. ARROW
                    ACCEL will assume that all images supplied to us are owned
                    by the Client or have been purchased from stock libraries
                    and are licensed to the client for use. We cannot use images
                    taken from Google.
                  </li>
                  <li className="mt-4">
                    If you are using images of children that you have taken,
                    then we will assume that you have been given the permission
                    to use these images.
                  </li>
                  <li className="mt-4">
                    You grant ARROW ACCEL permission to utilize logos and any
                    other company identity for the purposes of creating the
                    project. You agree to indemnify ARROW ACCEL from any and all
                    claims arising from your negligence or inability to obtain
                    proper copyright permissions for all content supplied.
                  </li>
                </ol>
              </TermPoint>
              <TermPoint point="Confidentiality">
                <ol className="list-decimal list-outside px-6">
                  <li className="mt-4">
                    Confidentiality: Save as required by law, ARROW ACCEL will
                    keep your documents and affairs confidential at all times,
                    unless you permit disclosure or the relevant circumstances
                    are already in the public domain. ARROW ACCEL may, however,
                    disclose your documents and affairs to:
                    <ol className="px-5 list-[lower-roman] list-outside mt-1">
                      <li>
                        such of your other service providers as you inform ARROW
                        ACCEL are involved in any assignment on which ARROW
                        ACCEL is instructed;
                      </li>
                      <li>ARROW ACCEL’s affiliates or related parties; and</li>
                      <li>
                        any other service provider to whom ARROW ACCEL may
                        properly delegate aspects of any assignment in order to
                        provide a full range of services to you.
                      </li>
                    </ol>
                  </li>
                </ol>
              </TermPoint>
              <TermPoint point="Intellectual Property">
                <ol className="list-decimal list-outside px-6">
                  <li className="mt-4">
                    Freedom to use Ideas and IP: ARROW ACCEL may develop or use
                    for other clients any ideas, concepts, source code,
                    information or know how reflected in any of the materials
                    provided to you (in whatever form) or otherwise developed
                    during the course of providing services to you.
                  </li>
                  <li className="mt-4">
                    Ownership of Materials and Intellectual Property: All
                    products, creative works, plans for designs, unique campaign
                    ideas, slogans, copy themes, preliminary sketches, layouts,
                    copy, artwork, production services, public and other
                    marketing material (whether on paper, computer disk, by
                    email or in some other digital format) accepted by ARROW
                    ACCEL, shall, upon you paying ARROW ACCEL in full for the
                    relevant materials, be your property, except to the extent
                    that any intellectual property rights therein have been
                    reserved by ARROW ACCEL or third parties engaged or employed
                    by ARROW ACCEL.
                  </li>
                  <li className="mt-4">
                    Portfolio Rights. ARROW ACCEL retain the right to showcase
                    your project on their website and design portfolio for the
                    sole purpose of promoting our work.
                  </li>
                  <li className="mt-4">
                    Working Files and Copyright: ARROW ACCEL own the legal
                    copyright of our working files. Working files are our
                    intellectual property and this can be and not limited to
                    design concepts, design elements, info graphics, fonts and
                    imagery. Working files are not released as part of our
                    projects. If you wish to be supplied working files, then
                    this needs to be requested and we will supply a quote for
                    this release.
                  </li>
                </ol>
              </TermPoint>
              <TermPoint point="Indemnity">
                <ol className="list-decimal list-outside px-6">
                  <li className="mt-4">
                    All services may be used for lawful purposes only. You agree
                    to indemnify and hold harmless third party service providers
                    and ARROW ACCEL from any claims resulting from your use of
                    our service that damages you or any other party.
                  </li>
                </ol>
              </TermPoint>
              <TermPoint point="Liability">
                <ol className="list-decimal list-outside px-6">
                  <li className="mt-4">
                    Our total liability to you in contract or in tort arising in
                    connection with this contract shall not exceed 50% of the
                    total price paid by you. We shall have no liability for loss
                    of profits, business, revenue, goodwill or anticipated
                    savings or for any other indirect or consequential loss.
                  </li>
                </ol>
              </TermPoint>
              <TermPoint point="Variation">
                <ol className="list-decimal list-outside px-6">
                  <li className="mt-4">
                    Variation: These Terms and Conditions (and/or the contents
                    of any agreement to which they relate) may be varied or
                    superseded at any time by agreement in writing between us.
                    Any such variation shall not affect any rights or
                    obligations of either of us that may already have accrued,
                    unless otherwise specifically agreed.
                  </li>
                </ol>
              </TermPoint>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
