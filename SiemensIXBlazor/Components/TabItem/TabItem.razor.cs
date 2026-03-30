// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

using Microsoft.AspNetCore.Components;

namespace SiemensIXBlazor.Components.TabItem
{
    /// <summary>
    /// Siemens IX Tab Item component for individual tab content
    /// </summary>
    public partial class TabItem : ComponentBase
    {
        /// <summary>
        /// Unique identifier for the component
        /// </summary>
        [Parameter] public string Id { get; set; } = string.Empty;

        /// <summary>
        /// Additional CSS classes to apply to the component
        /// </summary>
        [Parameter] public string Class { get; set; } = string.Empty;

        /// <summary>
        /// Inline styles to apply to the component
        /// </summary>
        [Parameter] public string Style { get; set; } = string.Empty;

        /// <summary>
        /// Tab item label text
        /// </summary>
        [Parameter] public string? TabTitle { get; set; }

        /// <summary>
        /// Icon to display in the tab header
        /// </summary>
        [Parameter] public string? Icon { get; set; }

        /// <summary>
        /// Whether the tab is disabled
        /// </summary>
        [Parameter] public bool Disabled { get; set; } = false;

        /// <summary>
        /// Whether the tab is selected/active
        /// </summary>
        [Parameter] public bool Selected { get; set; } = false;

        /// <summary>
        /// Counter value to display in the tab
        /// </summary>
        [Parameter] public int? Counter { get; set; }

        /// <summary>
        /// Additional attributes to apply to the component
        /// </summary>
        [Parameter(CaptureUnmatchedValues = true)]
        public IDictionary<string, object>? UserAttributes { get; set; }

        /// <summary>
        /// Child content to render inside the tab item
        /// </summary>
        [Parameter] public RenderFragment? ChildContent { get; set; }

        private string GetCssClasses()
        {
            var classes = new List<string>();
            
            if (!string.IsNullOrEmpty(Class))
                classes.Add(Class);

            return string.Join(" ", classes);
        }
    }
}
