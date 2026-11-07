const endpoint = "https://ctsijiwlhfsmsypqgwix.supabase.co/functions/v1/submissions";
const form = document.getElementById("submission-form");
const button = document.getElementById("submit-button");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  status.textContent = "";
  status.className = "status";
  if (!form.reportValidity()) return;

  const values = new FormData(form);
  const submission = {
    title: values.get("title").trim(),
    summary: values.get("summary").trim(),
    source_url: values.get("source_url").trim(),
    release_url: values.get("release_url").trim() || null,
    contact_url: values.get("contact_url").trim() || null,
    license_spdx: values.get("license_spdx").trim(),
    display_name: values.get("display_name").trim() || null,
    rights_attested: values.get("rights_attested") === "on",
  };
  button.disabled = true;
  status.textContent = "Sending your game for review…";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(submission),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result?.error?.message || "The submission could not be sent.");
    }
    status.className = "status success";
    status.textContent = "Submitted for review. Reference: " + result.id + ". Your game is not published yet.";
    form.reset();
  } catch (error) {
    status.className = "status error";
    status.textContent = error instanceof Error ? error.message : "The submission could not be sent.";
  } finally {
    button.disabled = false;
  }
});
