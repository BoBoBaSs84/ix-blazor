﻿// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

using System;
using Microsoft.AspNetCore.Components;
using SiemensIXBlazor.Enums.PushCard;

namespace SiemensIXBlazor.Components
{
	public partial class PushCard
	{
        /// <summary>
        /// Card heading
        /// </summary>
        [Parameter]
		public string? Heading { get; set; }
        /// <summary>
        /// Card icon
        /// </summary>
        [Parameter]
        public string? Icon { get; set; }
        /// <summary>
        /// Card KPI value
        /// </summary>
        [Parameter]
        public string? Notification { get; set; }
        /// <summary>
        /// Card subheading
        /// </summary>
        [Parameter]
        public string? SubHeading { get; set; }
        [Parameter]
        public bool Collapsed { get; set; } = true;
        /// <summary>
        /// Card variant
        /// </summary>
        [Parameter]
        public PushCardVariant Variant { get; set; } = PushCardVariant.insight;
    }
}

